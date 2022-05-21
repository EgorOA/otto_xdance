let g20_angle = 0
let g15_angle = 0
let g5_angle = 0
let g2_angle = 0

let angle4 = 0
let angle3 = 0
let angle2 = 0
let angle1 = 0
let i_loop = 0
let m_loop = 0

let Z4 = 0
let Z3 = 0
let Z2 = 0
let Z1 = 0
let i_loop2 = 0
let m_loop2 = 0

let tmp_cnt = 0

let step = 0
let cnt = 0

let G14: number[] = []
let G13: number[] = []
let G12: number[] = []
let G11: number[] = []
let bkwd_g20: number[] = []
let bkwd_g15: number[] = []
let bkwd_g5: number[] = []
let bkwd_g2: number[] = []

let G4: number[] = []
let G3: number[] = []
let G2: number[] = []
let G1: number[] = []
let fwd_g20: number[] = []
let fwd_g15: number[] = []
let fwd_g5: number[] = []
let fwd_g2: number[] = []

let RbServos: robotbit.Servos[] = [
    robotbit.Servos.S1,
    robotbit.Servos.S2,
    robotbit.Servos.S3,
    robotbit.Servos.S4,
    robotbit.Servos.S5,
    robotbit.Servos.S6,
    robotbit.Servos.S7,
    robotbit.Servos.S8
]

function DoServo(ServoNum: number, Degree: number) {
    if (ServoNum > 0 && Degree >= 0) {
        robotbit.Servo(RbServos[ServoNum - 1], Degree)
    }
}

function DoServos(Degrees: number[]) {
    for (let i = 1; i <= 8; i++) {
        DoServo(i, Degrees[i])
    }
}

// 6,8 - hands
// 5,7 - arms
function HandsOn() {
    DoServo(5, 30)
    basic.pause(500)
    DoServo(6, 30)
    basic.pause(500)
    DoServo(6, 90)
    basic.pause(500)
    DoServo(6, 30)
    basic.pause(500)
    DoServo(6, 90)
    basic.pause(500)

    DoServo(7, 170)
    basic.pause(500)
    DoServo(8, 160)
    basic.pause(500)
    DoServo(8, 90)
    basic.pause(500)
    DoServo(8, 160)
    basic.pause(500)
    DoServo(8, 90)
    basic.pause(500)

    DoServo(6, 30)
    DoServo(8, 160)
    basic.pause(500)

    DoServo(6, 90)
    DoServo(8, 90)
    basic.pause(500)

    DoServo(6, 30)
    DoServo(8, 160)
    basic.pause(500)

    DoServo(6, 90)
    DoServo(8, 90)

    DoServo(5, 110)
    DoServo(7, 80)
}

fwd_g2 = [105, 98, 89, 74, 66, 75, 89, 98, 105, 180]
fwd_g5 = [90, 101, 110, 101, 90, 80, 72, 82, 90, 180]
fwd_g15 = [99, 88, 74, 60, 50, 60, 78, 87, 99, 180]
fwd_g20 = [90, 96, 104, 112, 101, 90, 76, 89, 97, 180]
G1 = [115, 104, 91, 81, 71, 80, 93, 104, 111, 180]
G2 = [90, 110, 125, 110, 90, 75, 60, 75, 90, 180]
G3 = [110, 97, 84, 73, 65, 74, 86, 95, 108, 180]
G4 = [90, 75, 65, 75, 90, 110, 125, 115, 90, 180]

function GoForward(delay: number) {
    if (m_loop < step) {
        if (i_loop < cnt - 1) {
            i_loop += 1
            tmp_cnt = m_loop + 1
            g2_angle = fwd_g2[m_loop] + Math.idiv((fwd_g2[tmp_cnt] - fwd_g2[m_loop]) * (i_loop + 1), cnt)
            g5_angle = fwd_g5[m_loop] + Math.idiv((fwd_g5[tmp_cnt] - fwd_g5[m_loop]) * (i_loop + 1), cnt)
            g15_angle = fwd_g15[m_loop] + Math.idiv((fwd_g15[tmp_cnt] - fwd_g15[m_loop]) * (i_loop + 1), cnt)
            g20_angle = fwd_g20[m_loop] + Math.idiv((fwd_g20[tmp_cnt] - fwd_g20[m_loop]) * (i_loop + 1), cnt)
            angle1 = G1[m_loop] + Math.idiv((G1[tmp_cnt] - G1[m_loop]) * (i_loop + 1), cnt)
            angle2 = G2[m_loop] + Math.idiv((G2[tmp_cnt] - G2[m_loop]) * (i_loop + 1), cnt)
            angle3 = G3[m_loop] + Math.idiv((G3[tmp_cnt] - G3[m_loop]) * (i_loop + 1), cnt)
            angle4 = G4[m_loop] + Math.idiv((G4[tmp_cnt] - G4[m_loop]) * (i_loop + 1), cnt)
            basic.pause(delay)
            DoServos([g2_angle, g5_angle, g15_angle, g20_angle, angle1, angle2, angle3, angle4])
        } else {
            i_loop = 0
        }
        m_loop += 1
    } else {
        m_loop = 0
        DoServos([90, 90, 80, 96, 120, 110, 120])
    }
}

bkwd_g2 = [74, 80, 91, 109, 114, 104, 87, 80, 72, 180]
bkwd_g5 = [90, 105, 115, 105, 90, 78, 70, 80, 90, 180]
bkwd_g15 = [52, 60, 78, 99, 108, 96, 88, 74, 70, 180]
bkwd_g20 = [90, 96, 105, 112, 100, 87, 75, 89, 97, 180]
G11 = [66, 75, 89, 98, 105, 97, 89, 79, 67, 180]
G12 = [90, 75, 60, 75, 90, 110, 130, 110, 75, 180]
G13 = [65, 74, 86, 95, 108, 95, 86, 72, 65, 180]
G14 = [90, 105, 120, 126, 100, 75, 60, 70, 90, 180]

function GoBackward(delay: number) {
    if (m_loop2 < step) {
        if (i_loop2 < cnt - 1) {
            tmp_cnt = m_loop2 + 1
            i_loop2 += 1
            g2_angle = bkwd_g2[m_loop2] + Math.idiv((bkwd_g2[tmp_cnt] - bkwd_g2[m_loop2]) * (i_loop2 + 1), cnt)
            g5_angle = bkwd_g5[m_loop2] + Math.idiv((bkwd_g5[tmp_cnt] - bkwd_g5[m_loop2]) * (i_loop2 + 1), cnt)
            g15_angle = bkwd_g15[m_loop2] + Math.idiv((bkwd_g15[tmp_cnt] - bkwd_g15[m_loop2]) * (i_loop2 + 1), cnt)
            g20_angle = bkwd_g20[m_loop2] + Math.idiv((bkwd_g20[tmp_cnt] - bkwd_g20[m_loop2]) * (i_loop2 + 1), cnt)
            Z1 = G11[m_loop2] + Math.idiv((G11[tmp_cnt] - G11[m_loop2]) * (i_loop2 + 1), cnt)
            Z2 = G12[m_loop2] + Math.idiv((G12[tmp_cnt] - G12[m_loop2]) * (i_loop2 + 1), cnt)
            Z3 = G13[m_loop2] + Math.idiv((G13[tmp_cnt] - G13[m_loop2]) * (i_loop2 + 1), cnt)
            Z4 = G14[m_loop2] + Math.idiv((G14[tmp_cnt] - G14[m_loop2]) * (i_loop2 + 1), cnt)
            basic.pause(delay)
            DoServos([g2_angle, g5_angle, g15_angle, g20_angle, Z1, Z2, Z3, Z4])
        } else {
            i_loop2 = 0
        }
        m_loop2 += 1
    } else {
        m_loop2 = 0
        DoServos([90, 90, 80, 96, 120, 110, 120])
    }
}

cnt = 9
step = 7

function InitPos() {
    DoServos([90, 90, 80, 96, 110, 90, 80, 90])
}

basic.showIcon(IconNames.Heart)
music.beginMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
InitPos()
HandsOn()
for (let index = 0; index < 100; index++) {
    GoForward(100)
}

basic.forever(function () {
    robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(500)
    robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(500)
    robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(500)
    robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(500)
    robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Indigo))
    basic.pause(500)
})

