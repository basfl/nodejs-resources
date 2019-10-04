exports.getPosts = (req, res, next) => {
    console.log("##############");
    res.status(200).json({
        posts: [
            { title: "first post", content: "this is the first post" }
        ]
    })
}
exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    console.log("title",req.body)
    res.status(201).json({
        message: "post created succesfully!!",
        posts: [{ id: new Date().toISOString(), title: title, content: content }]
    })
}