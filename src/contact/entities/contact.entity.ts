import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Contact extends Document {
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    last_name: string;
    @Prop({ required: true })
    document_type: string;
    @Prop({ required: true })
    document_number: number;
    @Prop({ required: true })
    age: number;
    @Prop({ required: true, unique: true })
    email: string;
}
export const ContactSchema = SchemaFactory.createForClass(Contact);
