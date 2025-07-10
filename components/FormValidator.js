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
  const errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(errorClass);
}

  _toggleButtonState(inputEls, submitButton, config) {
    if (hasInvalidInput(inputEls)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disableButton = true;
    } 
    }

_hasInputError() {}

_checkInputValidity(inputErrorClass) {
   if (!inputElement.validity.valid) {
      const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    } else {
      const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);

    }
  }

  //  enableButton(submitButton, config);
  

  _setEventListener() {
    const { _inputSelector, _submitButtonSelector } = this;
    this._inputEls = [
      ...this._formElement.querySelectorAll(this._inputSelector),
    ];
    this._submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );
    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        checkInputValidity(this._formElement, inputEl, options);
        toggleButtonState(inputEls, submitButton, options);
      });
    });
  }


  enableValidation() {
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }
}

resetValidation() {}

export default FormValidator;
