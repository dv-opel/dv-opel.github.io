let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

tg.MainButton.setText("Натисни!");
tg.MainButton.show();

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData("Hello from web");
});

