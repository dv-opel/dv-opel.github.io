let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

tg.MainButton.setText("Натисни!");
tg.MainButton.show();

const firstValue = document.form-select.options[0];
console.log("Index:", firstValue.index);
console.log("Text:", firstValue.text);
console.log("Value:", firstValue.value);

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(firstValue.text);
});

