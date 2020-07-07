import { db } from '../models/index.js';

const gradesSchema = db.mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    validade(value) {
      if (value < 0)
        throw new Error('Valor negativo para a nota não permitido');
    },
  },
  lastModified: {
    type: Date,
    default: Date.now(),
  },
});

const gradesModel = db.mongoose.model('grades', gradesSchema, 'grades');

export { gradesModel };
