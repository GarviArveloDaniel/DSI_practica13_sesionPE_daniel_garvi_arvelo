import { Document, Schema, model } from 'mongoose';


interface CardDocumentInterface extends Document {
  id: number;
  name: string;
  manaCost: number;
  color: 'white' | 'blue' | 'black' | 'red' | 'green' | 'colorless' | 'multi';
  type: 'land' | 'creature' | 'enchantment' | 'conjure' | 'instant' | 'artefact' | 'planeswalker';
  rarity: 'common' | 'uncommon' | 'rare' | 'mythic';
  rulesText: string;
  marketValue: number;
  strengthResitance?: [number, number];
  loyalty?: number;
}

const CardSchema = new Schema<CardDocumentInterface>({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  manaCost: {
    type: Number,
    required: true,
    min: 1,
  },
  color: {
    type: String,
    required: true,
    enum: ['white', 'blue', 'black', 'red', 'green', 'colorless', 'multi'],
  },
  type: {
    type: String,
    required: true,
    enum: ['land', 'creature', 'enchantment', 'conjure', 'instant', 'artefact', 'planeswalker'],
  },
  rarity: {
    type: String,
    required: true,
    enum: ['common', 'uncommon', 'rare', 'mythic'],
  },
  rulesText: {
    type: String,
    required: true,
    trim: true,
  },
  marketValue: {
    type: Number,
    required: true,
    min: 0,
  },
  strengthResitance: {
    type: [Number, Number],
  },
  loyalty: {
    type: Number,
  }
});

export const Card = model<CardDocumentInterface>('Card', CardSchema);