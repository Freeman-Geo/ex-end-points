app.get('/persona/:guid', (req, res) => {
    const { guid } = req.params;
    const { name } = req.query; 

    if (!guid || !name) {
        return res.status(400).send("GUID o nombre no proporcionados");
    }

    return res.json({
        "guid": "112233",
        "name": "Geo"
    });
});