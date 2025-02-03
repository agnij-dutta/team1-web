export function MindshareSection() {
  const tweets = [
    {
      author: "CryptoVisionary",
      handle: "@crypto_v",
      content:
        "Just experienced the incredible speed of Avalanche network. The future of blockchain is here! 🚀 #AvalancheTeam1",
      likes: 1234,
      retweets: 567,
    },
    {
      author: "BlockchainDev",
      handle: "@dev_chain",
      content: "Building on Avalanche has been a game-changer. The tools and community support are unmatched! 💻",
      likes: 892,
      retweets: 345,
    },
    {
      author: "DeFiExplorer",
      handle: "@defi_exp",
      content:
        "The scalability and speed of Avalanche is revolutionizing DeFi. This is what mass adoption looks like! 📈",
      likes: 2156,
      retweets: 890,
    },
    {
      author: "Web3Builder",
      handle: "@web3_builds",
      content: "Avalanche's subnet architecture is brilliant. Perfect balance of decentralization and performance. 🌐",
      likes: 1567,
      retweets: 678,
    },
  ]

  return (
    <section className="w-full py-24 bg-gradient-to-b from-black to-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 tracking-tighter text-center">MINDSHARE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tweets.map((tweet, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-white">{tweet.author}</h3>
                  <p className="text-sm text-gray-400">{tweet.handle}</p>
                </div>
              </div>
              <p className="text-gray-200 mb-4">{tweet.content}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>❤️ {tweet.likes}</span>
                <span>🔄 {tweet.retweets}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

