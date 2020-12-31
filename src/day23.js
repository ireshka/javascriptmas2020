class TwitterType {
  constructor() {
    this._textareaBox = document.querySelector('#textareaBox');
    this._counter = document.querySelector('#counterFooter');
    this._counterCurrent = document.querySelector('#counterFooterCurrent');
    this._button = document.querySelector('#btn');
    this._maxBoxChars = 140;
    this._alertClass = 'counter--alert';
    this._disabledClass = 'buttonDisabled';
  }

  _handleKeyPress(event) {
    const charNumbers = event.target.value.length;
    const leftNumbers = this._maxBoxChars - charNumbers;
    this._counterCurrent.textContent = leftNumbers;

    if (leftNumbers <= 20) {
      this._counter.classList.add(this._alertClass);
    } else {
      this._counter.classList.remove(this._alertClass);
    }

    if (leftNumbers < 0) {
      this._button.classList.add(this._disabledClass);
      this._button.setAttribute('disabled', true);
      return;
    }

    this._button.removeAttribute('disabled');
    this._button.classList.remove(this._disabledClass);
  }

  init() {
    this._textareaBox.addEventListener('keyup', (event) =>
      this._handleKeyPress(event),
    );
  }
}

const twitterBox = new TwitterType();
twitterBox.init();
