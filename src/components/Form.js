import React, {useState} from 'react'
import FormSigup from './FormSigup';
import FormSuccess from './FormSuccess';

function Form() {

    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <div>
            {!isSubmitted ? (
                <FormSigup submitForm={submitForm} />
                ) : (
                <FormSuccess />
            )}
        </div>
    )
}

export default Form
