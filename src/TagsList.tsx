import React from "react";

export interface ITag {
  id?: string;
  name: string;
}

interface ITagsListProps {
  tags: ITag[];
}

const TagsList = (props: ITagsListProps) => {
  const tagWrappers = props.tags.map((tag: ITag) => (
    <li key={tag.id}>{tag.name}</li>
  ));
  return <ul>{tagWrappers}</ul>;
};

export default TagsList;
