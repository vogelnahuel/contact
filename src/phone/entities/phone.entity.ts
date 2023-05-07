import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Phone extends Document {
    @Prop({ type: Types.ObjectId, ref: 'Contact' })
    contact: Types.ObjectId;
    @Prop()
    type: string;
    @Prop()
    number: number;
}
export const PhoneSchema = SchemaFactory.createForClass(Phone);
