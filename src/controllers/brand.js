exports.brand=(req,res) => {
    const user = [
        {
            Nam : "Pant 32",
            size : "xl"
        },
        {
            Nam : "SHARAT 32",
            size : "xl"
        }
    ];

    res.json(user);
}