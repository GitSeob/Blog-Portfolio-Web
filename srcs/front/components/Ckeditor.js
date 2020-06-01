import React from 'react';
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useInput } from '../pages/login';

const Ckeditor = props => {
	const [ckval, OCV] = useInput('');
	return (
		<div className="App">
			<div className="container">
				<div className="wrapper">
					<form className="form-group">
						<div className="form-group">
							<label>Name</label>
							<input type="text" name="name" className="form-control"/>
						</div>
						<div className="form-group">
							<label>email</label>
							<input type="text" name="email" className="form-control"/>
						</div>
						<div className="form-group">
							<CKEditor
								editor={ClassicEditor}
								onInit={ editor=>{
									console.log(editor);
								}}
								value={ckval}
								onChange={OCV}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

Ckeditor.propTypes = {

};

export default Ckeditor;
