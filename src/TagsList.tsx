import React from "react";
import Tag, {ITag} from "./Tag";
import "./TagsList.css";

interface ITagsListProps {
  tags: ITag[];
}

const TagsList = (props: ITagsListProps) => {
  const tagWrappers = props.tags.map(tag => <Tag key={tag.id} tag={tag} />);
  return <ul className="horizontal-list">{tagWrappers}</ul>;
};

export default TagsList;
