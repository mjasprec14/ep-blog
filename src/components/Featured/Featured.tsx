import { Post } from '@sanity-typings';

type Props = {
  posts: Post[];
};

export default function Featured({ posts }: Props) {
  return <section id='featured-article'></section>;
}
