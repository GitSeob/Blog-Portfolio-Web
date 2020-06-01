import React, {useState, useEffect} from 'react';
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Ckeditor = props => {
	const [ckval, OCV] = useState('<h1>hello ckeditor</h1>');

	useEffect(()=>{
		console.log(ckval)
	}, [ckval])

	return (
		<div className="App">
			<div className="container">
				<div className="wrapper">
					<form className="form-group">

						<div className="form-group">
							<CKEditor
								editor={ClassicEditor}
								onInit={ editor=>{
									console.log(editor);
								}}
								data={ckval}
								onChange={(event, editor) =>{
									const data = editor.getData();
									OCV(data);
									// console.log( { event, editor, data } );
								}}
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
