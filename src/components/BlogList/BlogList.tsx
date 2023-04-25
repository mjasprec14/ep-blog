import { Post } from '@sanity-typings';

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  return <section id='blog-list'></section>;
}
