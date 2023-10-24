export function clearForm(form) {
    const formLabels = form.querySelectorAll('.form__input-placeholder')
    form.reset()
    const formInputs = form.querySelectorAll('.form__input')

    formLabels.forEach(label => {
        if(label.classList.contains('hidden')) {
            label.classList.remove('hidden')
        }
    })
    formInputs.forEach(label => {
        if(label.classList.contains('error')) {
            label.classList.remove('error')
        }
    })
}
export function handlerFormOrder() {

    const INPUTS_PHONE = document.querySelectorAll('[data-form-number]');
    const BTN_ORDER = document.querySelectorAll('button[data-form-order]')
    const FORM_INPUT = document.querySelectorAll('.form__input');
    FORM_INPUT.forEach(input => {
        const label = input.nextElementSibling;

        input.addEventListener('input', function(e) {
            e.stopPropagation()
            if (input.value.length > 0) {
                label.classList.add('hidden')
            } else {
                label.classList.remove('hidden')
            }
            if(input.classList.contains('error')) {
                input.classList.remove('error')
            }
        });
    });

    INPUTS_PHONE.forEach(input => {
        input.addEventListener('input', function (e) {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            e.target.value = !x[2] ? x[1] : '+7 (' + x[2] + (x[3] ? ') ' + x[3] + (x[4] ? '-' + x[4] + (x[5] ? '-' + x[5] : '') : '') : '');
        });
    });

    function validFormInput(formData) {
        let reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isCheckName = formData.name.value.length >= 1
        const isCheckPhone = formData.phone.value.length >= 18
        const isCheckEmail = reEmail.test(formData.email.value)
        const isCheckOrganization = formData.organization.value.length > 1

        const FORM_DATA_VALUE = {
            name: formData.name.value,
            phone: formData.phone.value,
            email: formData.email.value,
            organization: formData.organization.value,
        }

        if(isCheckName && isCheckPhone && isCheckEmail && isCheckOrganization) {
            submitOrder(FORM_DATA_VALUE, formData)
        } else {
            if(!isCheckName) {
                formData.name.classList.add('error')
            }
            if(!isCheckPhone) {
                formData.phone.classList.add('error')
            }
            if(!isCheckEmail) {
                formData.email.classList.add('error')
            }
            if(formData.organization.value.length < 1) {
                formData.organization.classList.add('error')
            }
        }

    }
    async function submitOrder(formValue, formData) {
        formData.form.classList.add('hidden')
        formData.successful.classList.add('active')
        clearForm(formData.form)
        console.log(JSON.stringify(formValue))
        // try {
        //     const response = await fetch('#', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(formData),
        //     });
        //
        //     if (!response.ok) {
        //         throw new Error('Failed to submit the order');
        //     }
        //
        //     const data = await response.json();
        //
        //     console.log(data);
        // } catch (error) {
        //     console.error('An error occurred:', error);
        // }
    }

    BTN_ORDER.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const data = button.getAttribute('data-form-order');
            const form = document.querySelector(`form[data-form-order="${data}"]`);
            const successful = document.querySelector(`.form__successful[data-form-order="${data}"]`)
            const FORM_DATA = {
                form: form,
                successful:  successful,
                name: form.querySelector('[data-form-name]'),
                phone: form.querySelector('[data-form-number]'),
                email: form.querySelector('[data-form-email]'),
                organization: form.querySelector('[data-form-organization]'),
            }
            validFormInput(FORM_DATA);
        })
    })
}