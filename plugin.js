/*
 CKEditor Plugin 
 name : Cy-GistInsert.
 2016-08-27. 
 by igotit. 
*/
CKEDITOR.plugins.add( 'Cy-GistInsert', {
    icons: 'Cy-GistInsert',
    init: function( editor ) {
        editor.addCommand( 'cmd-insertgist1', new CKEDITOR.dialogCommand('Cy-GistInsertDlg')); // adding command with dialog.
        editor.ui.addButton( 'Cy-GistInsert', {
            label: 'Insert GitHub Gist',      // button's tooltip text.
            command: 'cmd-insertgist1',       // the command to be executed when the button is clicked.
            toolbar: 'insert'                 // toolbar groub into which the button will be added
        });
        CKEDITOR.dialog.add('Cy-GistInsertDlg', this.path + 'dialogs/Cy-GistInsertDlg.js');  // related to real dlg filepath and file name. 
    }
});