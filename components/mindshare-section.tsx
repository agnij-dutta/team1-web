"use client"
import { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { cn } from "@/lib/utils"

const tweets = [
  {
    author: "DeFiMaster",
    handle: "@defi_master",
    content: "Mind-blown by the transaction speeds on Avalanche! 🚀 Less than 2 seconds finality is a game-changer for DeFi applications.",
    likes: 3421,
    retweets: 892,
    size: "large"
  },
  {
    author: "CryptoInnovator",
    handle: "@crypto_innov",
    content: "Building my first dApp on Avalanche. The developer experience is absolutely seamless! 💻",
    likes: 1205,
    retweets: 445,
    size: "small"
  },
  {
    author: "Web3Enthusiast",
    handle: "@web3_eth",
    content: "Avalanche's subnets are revolutionary! Perfect balance of decentralization and performance. 🌐",
    likes: 2890,
    retweets: 1203,
    size: "medium"
  },
  {
    author: "BlockchainDev",
    handle: "@chain_builder",
    content: "Just deployed a complex smart contract on C-Chain. The low fees make development enjoyable! ⛓️",
    likes: 1567,
    retweets: 678,
    size: "large"
  },
  {
    author: "NFTArtist",
    handle: "@nft_creator",
    content: "Minting NFTs on Avalanche is a dream. Instant confirmation and minimal fees! 🎨",
    likes: 3156,
    retweets: 1290,
    size: "small"
  },
  {
    author: "GameDev",
    handle: "@blockchain_games",
    content: "Our game's performance improved 10x after moving to Avalanche. Amazing! 🎮",
    likes: 2767,
    retweets: 978,
    size: "medium"
  }
]

const duplicatedTweets = [...tweets, ...tweets] // Duplicate for seamless scrolling

export function MindshareSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'w-64 h-44'
      case 'medium':
        return 'w-72 h-52'
      case 'large':
        return 'w-80 h-60'
      default:
        return 'w-72 h-52'
    }
  }

  return (
    <section className="w-full py-24 relative overflow-hidden bg-black/20">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-primary/10" />
      <div className="absolute inset-0 enhanced-grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-[100vw]">
        <h2 className="text-5xl font-bold mb-16 tracking-tighter text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600">
          MINDSHARE
        </h2>

        <div 
          ref={containerRef} 
          className="overflow-hidden mindshare-container will-change-transform"
        >
          {[1, 2].map((row) => (
            <div 
              key={row}
              className={cn(
                "flex py-4 hover:pause-animation will-change-transform",
                `scroll-row-${row}`
              )}
            >
              {duplicatedTweets.map((tweet, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "tweet-card flex-shrink-0 mx-4 relative group cursor-pointer",
                    getSizeClasses(tweet.size)
                  )}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="h-full backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-white group-hover:text-red-400 transition-colors">
                          {tweet.author}
                        </h3>
                        <p className="text-sm text-gray-400">{tweet.handle}</p>
                      </div>
                      <motion.div 
                        className="h-8 w-8 rounded-full bg-gradient-to-br from-red-400 to-red-600"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    </div>
                    <p className="text-gray-200 mb-4 line-clamp-3">{tweet.content}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mt-auto">
                      <motion.button 
                        className="flex items-center gap-2 hover:text-red-400 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span>❤️</span>
                        <motion.span 
                          className="tabular-nums"
                          whileHover={{ y: -2 }}
                        >
                          {tweet.likes}
                        </motion.span>
                      </motion.button>
                      <motion.button 
                        className="flex items-center gap-2 hover:text-red-400 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span>🔄</span>
                        <motion.span 
                          className="tabular-nums"
                          whileHover={{ y: -2 }}
                        >
                          {tweet.retweets}
                        </motion.span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        
        @keyframes scrollReverse {
          0% { transform: translateX(calc(-50% - 1rem)); }
          100% { transform: translateX(0); }
        }

        .scroll-row-1 {
          animation: scroll 60s linear infinite;
        }
        
        .scroll-row-2 {
          animation: scrollReverse 65s linear infinite;
        }

        .tweet-card {
          transform: translateZ(0);
        }

        @media (prefers-reduced-motion) {
          .scroll-row-1,
          .scroll-row-2 {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}

