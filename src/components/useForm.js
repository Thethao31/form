// component này dùng để lưu giá trị của người dùng nhập vào form
import { useState,useEffect} from 'react'

const useForm = (callback,validate) => {
    // lưu những cái value user nhập vào
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
            // =
            //e.target.name = e.target.value
        })
    }

    const [errors, setErrors] = useState({})

    const handleSubmit = e => {
        e.preventDefault()
    
        setErrors(validate(values))
        setIsSubmitting(true)
    }

    useEffect(() => {
        if(Object.keys(errors) === 0 && isSubmitting){
            callback()
        }
    }, [errors])

    return { handleChange, values, handleSubmit, errors, isSubmitting }

}

export default useForm