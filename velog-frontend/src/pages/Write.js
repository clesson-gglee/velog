// @flow
import React from 'react';
import WriteTemplate from 'components/write/WriteTemplate';
import WriteHeader from 'components/write/WriteHeader';
import WritePanes from 'components/write/WritePanes';
import CodeEditorContainer from 'containers/write/CodeEditorContainer';
import WriteHeaderContainer from 'containers/write/WriteHeaderContainer';
import MarkdownPreviewContainer from 'containers/write/MarkdownPreviewContainer';
import SubmitBox from 'components/write/SubmitBox';
import SelectCategory from 'components/write/SelectCategory';
import SubmitBoxContainer from 'containers/write/SubmitBoxContainer';


const Write = () => {
  return (
    <WriteTemplate
      header={<WriteHeaderContainer />}
    >
      <SubmitBoxContainer />
      <WritePanes
        left={
          <CodeEditorContainer />
        }
        right={
          <MarkdownPreviewContainer />
        }
      />
    </WriteTemplate>
  );
};

export default Write;