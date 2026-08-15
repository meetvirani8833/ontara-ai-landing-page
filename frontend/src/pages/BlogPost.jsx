import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowUpRightIcon from '../components/ui/icons/ArrowUpRightIcon';
import { blogPosts } from '../data/blogPosts';

const ease = [0.16, 1, 0.3, 1];

function Block({ block, glow }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="text-2xl md:text-3xl font-sans text-white mt-4 mb-2 tracking-tight">
          {block.text}
        </h2>
      );
    case 'list':
      return (
        <ul className="flex flex-col gap-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-lg md:text-xl text-white/70 font-sans leading-relaxed">
              <span className={`mt-3 w-1.5 h-1.5 rounded-full shrink-0 bg-gradient-to-tr ${glow}`} />
              {item}
            </li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <div className="my-4 pl-6 border-l-2 border-[#e5c07b]/50">
          <p className="text-xl md:text-2xl font-sans text-[#e5c07b] leading-snug">
            "{block.text}"
          </p>
        </div>
      );
    case 'p':
    default:
      return (
        <p className="text-lg md:text-xl text-white/70 font-sans leading-relaxed">
          {block.text}
        </p>
      );
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <main className="bg-[var(--cream)] min-h-screen">
      {/* ─── HERO ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-black/50 hover:text-black transition-colors mb-8"
            >
              ← Back to Blog
            </Link>

            <div className="flex items-center gap-4 flex-wrap mb-6">
              <span className="font-mono text-sm tracking-widest text-[var(--ink)] bg-black/[0.04] border border-black/10 px-3 py-1 rounded-full">
                {post.number}
              </span>
              <span className="font-mono text-xs tracking-widest uppercase text-black/50 border border-black/10 px-3 py-1 rounded-full">
                {post.tag}
              </span>
              <span className="font-mono text-xs tracking-widest text-black/40">
                {post.date} · {post.readTime}
              </span>
            </div>

            <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-[var(--ink)] mb-6">
              {post.title}
            </h1>

            {post.subtitle && (
              <p className="text-lg md:text-xl font-sans text-black/60 leading-relaxed max-w-[700px]">
                {post.subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─── ARTICLE BODY ── */}
      <div className="dark-section bg-[#02040A] text-white pt-24 border-t border-black/10 relative overflow-hidden">
        <div className={`absolute top-0 right-[-10%] w-[50%] h-[60%] rounded-full bg-gradient-to-tr ${post.glow} blur-[140px] opacity-10 mix-blend-screen pointer-events-none`} />

        <section className="pb-24 md:pb-32 px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-[800px] mx-auto flex flex-col gap-6"
          >
            {post.body.map((block, i) => (
              <Block key={i} block={block} glow={post.glow} />
            ))}
          </motion.div>
        </section>

        {/* ─── CTA ── */}
        <section className="pb-32 px-6 md:px-12 relative z-10">
          <div className="max-w-[800px] mx-auto">
            <div className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex flex-col gap-2">
                <p className="font-mono text-xs tracking-widest uppercase text-[#e5c07b]">See it in action</p>
                <p className="text-lg font-sans text-white/70">
                  Ontara Connect is live. Explore the product for yourself.
                </p>
              </div>
              <a
                href="https://ontara-connect-test.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap flex items-center gap-3 px-6 py-3 border border-white/20 rounded-full font-mono text-xs tracking-widest uppercase text-white hover:bg-white hover:text-black transition-all"
              >
                Visit Ontara Connect
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
