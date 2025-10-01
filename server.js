// server.js
const express = require('express');
const pool = require('./db');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/guardar', async (req, res) => {
  try {
    const {
      edad, sexo, escolaridad, ocupacion, estatura, peso, sueno, actividad,
      item1, item2, item3, item4, item5, item6, item7, item8, item9,
      item10, item11, item12, item13, item14, item15, item16, item17, item18
    } = req.body;

    await pool.query(
      `INSERT INTO cuestionario_autonomia (
        edad, sexo, escolaridad, ocupacion, estatura_cm, peso_kg, horas_sueno, dias_actividad_semana,
        item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,
        item11,item12,item13,item14,item15,item16,item17,item18
      ) VALUES (
        $1,$2,$3,$4,$5,$6,$7,$8,
        $9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,
        $20,$21,$22,$23,$24,$25,$26
      )`,
      [
        edad, sexo, escolaridad, ocupacion, estatura, peso, sueno, actividad,
        item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,
        item11,item12,item13,item14,item15,item16,item17,item18
      ]
    );

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Error al guardar los datos :", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
