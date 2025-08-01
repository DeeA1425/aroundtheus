class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._formElement = formElement;
  }

  _showInputError(inputEl, errorMessage) {
    const errorMessageEl = this._formElement.querySelector(
      `#${inputEl.id}-error`
    );
    inputEl.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = errorMessage;
    errorMessageEl.classList.add(this._errorClass);
  }

  _hideInputError(inputEl) {
    const errorMessageEl = this._formElement.querySelector(
      `#${inputEl.id}-error`
    );
    inputEl.classList.remove(this._inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this._errorClass);
  }

  _hasInvalidInput(inputEls) {
    return inputEls.some((inputEl) => {
      return !inputEl.validity.valid;
    });
  }

  _toggleButtonState(inputEls, submitButton) {
    if (this._hasInvalidInput(inputEls)) {
      submitButton.classList.add(this._inactiveButtonClass);
      submitButton.disabled = true;
    } else {
      submitButton.classList.remove(this._inactiveButtonClass);
      submitButton.disabled = false;
    }
  }

  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      this._showInputError(inputEl, inputEl.validationMessage);
    } else {
      this._hideInputError(inputEl);
    }
  }

  resetValidation() {
    this._inputEls.forEach((inputEl) => {
      this._hideInputError(inputEl);
    });
    this._toggleButtonState();
  }

  //  enableButton(submitButton, config);

  _setEventListener() {
    this._inputEls = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );

    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", () => {
        this._checkInputValidity(inputEl);
        this._toggleButtonState(this._inputEls, this._submitButton);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListener();
  }

  resetValidation() {
    this._toggleButtonState(this._inputEls, this._submitButton);
  }
}

export default FormValidator;
