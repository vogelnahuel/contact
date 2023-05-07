import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Home extends Document {
    @Prop({ type: Types.ObjectId, ref: 'Contact' })
    contact: Types.ObjectId;
    @Prop()
    locality: string;
    @Prop()
    street: string;
    @Prop()
    street_number: number;
    @Prop()
    description: string;
}
export const HomeSchema = SchemaFactory.createForClass(Home);
