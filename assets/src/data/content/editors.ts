import React from 'react';

export type EditorDesc = {
  deliveryElement: string | React.FunctionComponent;
  authoringElement: string | React.FunctionComponent;
  icon: string;
  description: string;
  friendlyName: string;
};

export interface ActivityEditorMap {

  // Index signature
  [prop: string]: EditorDesc;
}
