exports.hello=(req,res) => {
    res.status (200).json({statuss:"done working",data:"hello boss vai"})
}


exports.about=(req,res) => {
    const user = [
        {
            Nam : "Ebad",
            Age : 22
        },
        {
            Nam : "Rabbil",
            City : "Dhaka",
            Married : true
        }
    ];

    res.json(user);
}