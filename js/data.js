const products = [
    // Casual Wear
    {
        id: 'c1',
        category: 'casual',
        name: '海獺印花 T恤',
        price: 850,
        description: '舒適柔軟的純棉 T恤，左胸有精緻的海獺刺繡，適合日常穿搭。',
        image: 'assets/images/casual_tshirt.png'
    },
    {
        id: 'c2',
        category: 'casual',
        name: '海獺造型連帽衫',
        price: 1680,
        description: '保暖的連帽衫，背面印有大大的可愛海獺圖案，秋季必備。',
        image: 'assets/images/casual_hoodie.png'
    },
    {
        id: 'c3',
        category: 'casual',
        name: '海獺休閒短褲',
        price: 650,
        description: '清爽透氣的夏季短褲，佈滿細小的海獺剪影圖案。',
        image: 'https://placehold.co/600x600/e0f2f1/004d40?text=Casual+Shorts'
    },
    // Formal Wear
    {
        id: 'f1',
        category: 'formal',
        name: '海獺圖案領帶',
        price: 980,
        description: '深藍色絲質領帶，點綴低調的金色海獺圖騰，展現品味。',
        image: 'https://placehold.co/600x600/e0f2f1/004d40?text=Otter+Tie'
    },
    {
        id: 'f2',
        category: 'formal',
        name: '海獺刺繡背心',
        price: 2200,
        description: '修身剪裁的西裝背心，口袋處有精緻的海獺刺繡細節。',
        image: 'https://placehold.co/600x600/e0f2f1/004d40?text=Otter+Vest'
    },
    {
        id: 'f3',
        category: 'formal',
        name: '海獺西裝胸針',
        price: 450,
        description: '純銀打造的小巧海獺胸針，為正式服裝增添一絲趣味。',
        image: 'https://placehold.co/600x600/e0f2f1/004d40?text=Otter+Pin'
    },
    // Jewelry
    {
        id: 'j1',
        category: 'jewelry',
        name: '海獺貝殼純銀項鍊',
        price: 1280,
        description: '海獺抱著小貝殼的立體造型項鍊，優雅迷人。',
        image: 'https://placehold.co/600x600/e0f2f1/004d40?text=Otter+Necklace'
    },
    {
        id: 'j2',
        category: 'jewelry',
        name: '海獺造型耳環',
        price: 890,
        description: '不對稱設計的純銀耳環，一邊是海獺，一邊是小星星。',
        image: 'https://placehold.co/600x600/e0f2f1/004d40?text=Otter+Earrings'
    },
    {
        id: 'j3',
        category: 'jewelry',
        name: '擁抱海獺戒指',
        price: 1100,
        description: '可調式戒圍設計，就像一隻小海獺輕輕抱著你的手指。',
        image: 'https://placehold.co/600x600/e0f2f1/004d40?text=Otter+Ring'
    },
    // Accessories
    {
        id: 'a1',
        category: 'accessories',
        name: '海獺帆布袋',
        price: 390,
        description: '大容量環保帆布袋，印有海獺慵懶漂浮的插畫。',
        image: 'https://placehold.co/600x600/e0f2f1/004d40?text=Tote+Bag'
    },
    {
        id: 'a2',
        category: 'accessories',
        name: '海獺矽膠手機殼',
        price: 490,
        description: '防摔耐用的矽膠殼，背面有立體的海獺肉球造型。',
        image: 'https://placehold.co/600x600/e0f2f1/004d40?text=Phone+Case'
    },
    {
        id: 'a3',
        category: 'accessories',
        name: '海獺刺繡棒球帽',
        price: 550,
        description: '水洗復古質感的棒球帽，正面有海獺頭像刺繡。',
        image: 'https://placehold.co/600x600/e0f2f1/004d40?text=Baseball+Cap'
    },
    // Others
    {
        id: 'o1',
        category: 'others',
        name: '海獺絨毛玩偶',
        price: 750,
        description: '極致柔軟的絨毛材質，完美還原海獺的可愛模樣。',
        image: 'https://placehold.co/600x600/e0f2f1/004d40?text=Plushie'
    },
    {
        id: 'o2',
        category: 'others',
        name: '海獺陶瓷馬克杯',
        price: 350,
        description: '海獺造型的陶瓷馬克杯，喝水也能有好心情。',
        image: 'https://placehold.co/600x600/e0f2f1/004d40?text=Mug'
    },
    {
        id: 'o3',
        category: 'others',
        name: '海獺精裝筆記本',
        price: 250,
        description: '空白內頁設計，封面是燙金的海獺星座圖案。',
        image: 'https://placehold.co/600x600/e0f2f1/004d40?text=Notebook'
    },
    {
        id: 'o4',
        category: 'others',
        name: '海獺防水貼紙組',
        price: 150,
        description: '一組包含10種不同姿態的海獺防水貼紙，可貼於筆電或行李箱。',
        image: 'https://placehold.co/600x600/e0f2f1/004d40?text=Stickers'
    }
];

// Helper functions for categories
const getProductsByCategory = (category) => products.filter(p => p.category === category);
const getProductById = (id) => products.find(p => p.id === id);
const getFeaturedProducts = () => products.slice(0, 4);
