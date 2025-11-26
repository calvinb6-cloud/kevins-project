input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 A - E F - F G ", 141), music.PlaybackMode.LoopingInBackground)
})
input.onGesture(Gesture.Shake, function () {
	
})
