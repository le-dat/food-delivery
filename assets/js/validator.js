function Validator({ form, formGroup, errorSelector, rules }) {
  const formElement = document.querySelector(form);

  let arraySelector = {};

  function Validate(inputElement, rule) {
    const errorElement =
      inputElement.parentElement.querySelector(errorSelector);
    const rules = arraySelector[rule.selector];
    let errorMessage;

    for (let i = 0; i < rules.length; i++) {
      errorMessage = rules[i](inputElement.value); //gan mess loi = false
      if (errorMessage) break;
    }

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
      return false;
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
      return true;
    }
    // return !errorMessage;
  }

  if (formElement) {
    formElement.onsubmit = (e) => {
      let checkFormValid = true;
      let checkValid;

      rules.forEach((rule) => {
        const inputElement = formElement.querySelector(rule.selector);
        checkValid = Validate(inputElement, rule);
        if (!checkValid) {
          checkFormValid = false;
        }
      });
      if (!checkFormValid) {
        e.preventDefault();
      }
    };

    rules.forEach((rule) => {
      const inputElement = formElement.querySelector(rule.selector);

      if (Array.isArray(arraySelector[rule.selector])) {
        arraySelector[rule.selector].push(rule.testForm);
      } else {
        // init array for key
        arraySelector[rule.selector] = [rule.testForm];
      }

      if (inputElement) {
        inputElement.onblur = () => {
          checkForm = Validate(inputElement, rule);
        };
        inputElement.oninput = () => {
          const errorElement = inputElement
            .closest(formGroup)
            .querySelector(errorSelector);
          errorElement.innerText = "";
          inputElement.parentElement.classList.remove("invalid");
        };
      }
    });
  }
}
const isRequire = (selector, mess) => {
  return {
    selector,
    testForm: (value) => {
      return value.trim() ? undefined : mess || "Please provide this field";
    },
  };
};
const isEmail = (selector, mess) => {
  return {
    selector,
    testForm: (value) => {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : mess || "This field must be email";
    },
  };
};

const isMinLength = (selector, min, mess) => {
  return {
    selector,
    testForm: (value) => {
      return value.length >= min
        ? undefined
        : mess || `This field has at least ${min} numbers`;
    },
  };
};

const isConfirmPassword = (selector, sample, mess) => {
  return {
    selector,
    testForm: (value) => {
      return value === sample ? undefined : mess || `The value not match`;
    },
  };
};
