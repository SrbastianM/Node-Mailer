const { Router } = require('express');
const router = Router();

router.post('/send-email', (req, res) => {
    const {name, email, number, message} = req.body;
    
    contentHTML =  `
        <h1>User Information</h1>
        <ul>
        <li>Username: ${name}/li>
        <li>User Email: ${email}</li>
        <li>Phone: ${number}</li>
        </ul>
        <p>${message}</p>
    `;
    console.log(contentHTML);
    
    res.send('Recibido');
})

module.exports = router;