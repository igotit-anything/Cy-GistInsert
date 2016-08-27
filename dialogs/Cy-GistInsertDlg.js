/*
    file name : Cy-GistInsertDlg.js
    CKEditor Plugin "Cy-GistInsert" Dialog 
    by igotit. 2016-08-28.
*/

CKEDITOR.dialog.add('Cy-GistInsertDlg', function (editor) {
    return {
        title: 'Cy-GistInsert', // text shown titlebar.
        minWidth: 400,
        minHeight: 200,

        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Settings',
                elements: [
                    // UI elements of the first tab should be defined here.
                    {
                        type: 'text',
                        id: 'id-gisturi',
                        label: 'GitHub Gist ID',
                        validate: CKEDITOR.dialog.validate.notEmpty("GitHub Gist ID field cannot be empty.")
                    }
                ]
            },
            {
                id: 'tab-adv',
                label: 'Advanced Settings',
                elements: [
                    // UI elements of the second tab will be defined here.
                    {
                        type: 'text',
                        id: 'id-dummy',
                        label: 'title',
                    }
                ]
            }
        ],
        onOk: function () {
            var dialog = this;
            editor.insertHtml('Test from plugin Cy-GistInsert Dialog text = ' + dialog.getValueOf('tab-basic', 'id-gisturi')); // at now just testing purpose.
        }
    };
});