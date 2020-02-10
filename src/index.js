const {sequelize} = require('./db/models');
const {User} = require('./db/models');
const express = require('express');

const PORT = process.env.NODE_ENV || 3000;

const app = express();

app.get('/', (req, res, next) => {

    sequelize
        .authenticate()
        .then(() => {
            res.send('Ok')
        }).catch(() => {
        res.status(404).send('Not ok')
    })
});

app.post('/', async (req, res, next) => {
    try {
        const createdUser = await User.create(req.userData);

        if (createdUser) {
            const data = createdUser.get();
            delete data.password;
            return res.status(201).send(data);
        }
        next(new AppErrors.BadRequestError());
    } catch (e) {
        next(e);
    }
});

app.patch('/:userId', async (req, res, next) => {
    try {
        const [updatedRowsCount, updatedRows] = await User.update(req.userData, {
            where: {
                id: req.params.userId
            },
            returning: true,
        });

        if (updatedRowsCount) {
            const data = updatedRows[0].get();
            delete data.password;
            return res.send(data);
        }
        next(new AppErrors.NotFoundError('User'));
    } catch (e) {
        next(e);
    }
});

app.get('/', async (req, res, next) => {
    try {

        const foundUser = await User.findByPk(req.params.userId, {
            attributes: {
                exclude: ['password']
            }
        });

        if (foundUser) {
            return res.send(foundUser);
        }
        next(new AppErrors.NotFoundError('User'));
    } catch (e) {
        next(e);
    }
});

app.delete('/:userId', async (req, res, next) => {
    try {
        const deletedRowCount = await User.destroy({
            where: {
                id: req.params.userId
            }
        });
        if (deletedRowCount) {
            return res.send(`${deletedRowCount}`);
        }
        next(new AppErrors.NotFoundError('User'));
    } catch (e) {
        next(e);
    }
});

app.listen(PORT,
    () => console.log(`Server app started on port${PORT}`));