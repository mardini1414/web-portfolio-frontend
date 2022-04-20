import Link from 'next/link';

function MyLink(props) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}

export default MyLink;
