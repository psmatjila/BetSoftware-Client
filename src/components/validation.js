const validation = (values) => {
      let errors={};

      if(!values.username){
          errors.username="Username is required"
      }

      if(!values.email){
        errors.email="Email is required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Invalid email address"
    }

    if(!values.password){
        errors.password="Password is required"
    }else if (values.password.length < 5 )
    {
        errors.password="Password must be more than 5 characters."
    }else if (values.password !== values.passwordconfirm){
        errors.password="Passwords do not match."
    }
             
    return errors;
}

export default validation
