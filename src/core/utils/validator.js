let yup = require("yup");

let schema = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().email(),
  password: yup.string().required(),
});

exports.saveValidation = async (args) => {
    return schema.isValid({args})
}
