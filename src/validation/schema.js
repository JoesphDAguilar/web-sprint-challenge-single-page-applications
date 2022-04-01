import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Name is required for orders!")
        .min(2, "name must be at least 2 characters"),
    email: yup
        .string()
        .trim()
        .email("Must be a valid email!")
        .required("Email is required for orders!"),
    size: yup
        .string()
        .oneOf(['sm',
                'med',
                'large',
                'xlarger'], 'Must choose a size!'),
                
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    pineapple: yup.boolean(),
    mushrooms: yup.boolean(),
    anchovies: yup.boolean(),
    bacon: yup.boolean()
})

export default formSchema;