class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._formElement = formElement;
  }

  toggleButtonState(inputEls, submitButton, config) {
    if (hasInvalidInput(inputEls)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disableButton = true;
    } return disableButton(submitButton, config);
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disableButton = false;
    }
};
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

const editFormValidator = new FormValidator(settings, editForm);

export default FormValidator;
