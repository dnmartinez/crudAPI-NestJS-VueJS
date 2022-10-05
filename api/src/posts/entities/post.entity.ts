import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type PostDocument = Post & Document

@Schema ({
	toJSON: {
		virtuals:true,
		getters:true
	}
})

export class Post {
	@Prop({required: true})
	title: string;
	@Prop({required: true})
	author: string;
	@Prop({required: true})
	body: string;
}

const PostSchema = SchemaFactory.createForClass(Post)
PostSchema.virtual('id').get(function(this: Document) {
	return this._id.toHexString();
});

export {PostSchema}