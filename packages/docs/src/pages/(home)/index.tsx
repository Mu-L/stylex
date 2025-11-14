import * as stylex from '@stylexjs/stylex';
import { Link } from 'waku';

export default function Home() {
  return (
    <div {...stylex.props(styles.container)}>
      <h1 {...stylex.props(styles.title)}>Fumadocs on Waku.</h1>
      <Link {...stylex.props(styles.link)} to="/docs">
        Open Docs
      </Link>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  };
};

const styles = stylex.create({
  container: {
    //flex-1 flex flex-col items-center justify-center text-center
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
    minHeight: '100vh',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  link: {
    //
    paddingInline: 12,
    paddingBlock: 8,
    borderRadius: 8,
    backgroundColor: 'hotpink',
    color: 'black',
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.4285,
    marginInline: 'auto',
  },
});
