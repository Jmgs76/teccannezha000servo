input.onButtonPressed(Button.A, function () {
    servo_angle += 10
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, servo_angle)
})
input.onButtonPressed(Button.B, function () {
    servo_angle += -10
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, servo_angle)
})
let servo_angle = 0
servo_angle = 90
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, servo_angle)
basic.forever(function () {
    basic.showNumber(servo_angle)
})
