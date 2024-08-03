export default [
    {
      name: "Blog Title",
      desc: "An AI tool that generates blog titles based on your blog information.",
      category: "Blog",
      icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
      aiPrompt:
        "Give me 5 blog topic ideas in bullet points only based on the given niche & outline and provide the result in rich text editor format.",
      slug: "generate-blog-title",
      form: [
        {
          label: "Enter your blog niche",
          field: "input",
          name: "niche",
          required: true,
        },
        {
          label: "Enter blog outline (optional)",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "Social Media Post Ideas",
      desc: "An AI tool that generates engaging social media post ideas based on your topic and target audience.",
      category: "Social Media",
      icon: "https://cdn-icons-png.flaticon.com/128/733/733547.png",
      aiPrompt:
        "Give me 5 social media post ideas in bullet points only based on the given topic and target audience.",
      slug: "generate-social-media-post-ideas",
      form: [
        {
          label: "Enter your topic",
          field: "input",
          name: "topic",
          required: true,
        },
        {
          label: "Enter target audience",
          field: "textarea",
          name: "audience",
        },
      ],
    },
    {
      name: "Email Subject Lines",
      desc: "An AI tool that generates captivating email subject lines based on your email content.",
      category: "Email Marketing",
      icon: "https://cdn-icons-png.flaticon.com/128/281/281769.png",
      aiPrompt:
        "Give me 5 email subject line ideas in bullet points only based on the given email content.",
      slug: "generate-email-subject-lines",
      form: [
        {
          label: "Enter email content",
          field: "textarea",
          name: "content",
          required: true,
        },
      ],
    },
    {
      name: "Product Descriptions",
      desc: "An AI tool that generates compelling product descriptions based on your product details.",
      category: "E-commerce",
      icon: "https://cdn-icons-png.flaticon.com/128/3050/3050407.png",
      aiPrompt:
        "Give me 5 product description ideas in bullet points only based on the given product details.",
      slug: "generate-product-descriptions",
      form: [
        {
          label: "Enter product name",
          field: "input",
          name: "productName",
          required: true,
        },
        {
          label: "Enter product features",
          field: "textarea",
          name: "features",
        },
      ],
    },
    {
      name: "Video Script Ideas",
      desc: "An AI tool that generates creative video script ideas based on your topic and style.",
      category: "Video",
      icon: "https://cdn-icons-png.flaticon.com/128/616/616489.png",
      aiPrompt:
        "Give me 5 video script ideas in bullet points only based on the given topic and style.",
      slug: "generate-video-script-ideas",
      form: [
        {
          label: "Enter your video topic",
          field: "input",
          name: "topic",
          required: true,
        },
        {
          label: "Enter video style",
          field: "textarea",
          name: "style",
        },
      ],
    },
    {
      name: "Ad Copy Ideas",
      desc: "An AI tool that generates persuasive ad copy ideas based on your product and target audience.",
      category: "Advertising",
      icon: "https://cdn-icons-png.flaticon.com/128/3079/3079048.png",
      aiPrompt:
        "Give me 5 ad copy ideas in bullet points only based on the given product and target audience.",
      slug: "generate-ad-copy-ideas",
      form: [
        {
          label: "Enter product name",
          field: "input",
          name: "product",
          required: true,
        },
        {
          label: "Enter target audience",
          field: "textarea",
          name: "audience",
        },
      ],
    },
    {
      name: "Webinar Titles",
      desc: "An AI tool that generates engaging webinar titles based on your webinar topic and key points.",
      category: "Webinars",
      icon: "https://cdn-icons-png.flaticon.com/128/3541/3541730.png",
      aiPrompt:
        "Give me 5 webinar title ideas in bullet points only based on the given webinar topic and key points.",
      slug: "generate-webinar-titles",
      form: [
        {
          label: "Enter webinar topic",
          field: "input",
          name: "topic",
          required: true,
        },
        {
          label: "Enter key points",
          field: "textarea",
          name: "keyPoints",
        },
      ],
    },
    {
      name: "Slogan Ideas",
      desc: "An AI tool that generates catchy slogan ideas based on your brand and product details.",
      category: "Branding",
      icon: "https://cdn-icons-png.flaticon.com/128/2942/2942671.png",
      aiPrompt:
        "Give me 5 slogan ideas in bullet points only based on the given brand and product details.",
      slug: "generate-slogan-ideas",
      form: [
        {
          label: "Enter brand name",
          field: "input",
          name: "brand",
          required: true,
        },
        {
          label: "Enter product details",
          field: "textarea",
          name: "productDetails",
        },
      ],
    },
    {
      name: "Course Outline Ideas",
      desc: "An AI tool that generates detailed course outline ideas based on your subject and learning goals.",
      category: "Education",
      icon: "https://cdn-icons-png.flaticon.com/128/2891/2891239.png",
      aiPrompt:
        "Give me 5 course outline ideas in bullet points only based on the given subject and learning goals.",
      slug: "generate-course-outline-ideas",
      form: [
        {
          label: "Enter course subject",
          field: "input",
          name: "subject",
          required: true,
        },
        {
          label: "Enter learning goals",
          field: "textarea",
          name: "goals",
        },
      ],
    },
    {
      name: "Event Name Ideas",
      desc: "An AI tool that generates creative event name ideas based on your event type and theme.",
      category: "Events",
      icon: "https://cdn-icons-png.flaticon.com/128/2883/2883834.png",
      aiPrompt:
        "Give me 5 event name ideas in bullet points only based on the given event type and theme.",
      slug: "generate-event-name-ideas",
      form: [
        {
          label: "Enter event type",
          field: "input",
          name: "type",
          required: true,
        },
        {
          label: "Enter event theme",
          field: "textarea",
          name: "theme",
        },
      ],
    },
    {
      name: "Instagram Hashtags Generator",
      desc: "An AI tool that generates relevant Instagram hashtags based on your input content.",
      category: "Social Media",
      icon: "https://cdn-icons-png.flaticon.com/128/1384/1384063.png",
      aiPrompt:
        "Generate 10 trending Instagram hashtags in bullet points based on the provided topic or keywords.",
      slug: "generate-instagram-hashtags",
      form: [
        {
          label: "Enter topic or keywords",
          field: "input",
          name: "keywords",
          required: true,
        },
      ],
    },
    {
      name: "YouTube Tags Generator",
      desc: "An AI tool that generates optimized YouTube tags to enhance video discoverability.",
      category: "Video",
      icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
      aiPrompt:
        "Generate 10 relevant YouTube tags in bullet points based on the provided video title and description.",
      slug: "generate-youtube-tags",
      form: [
        {
          label: "Enter video title",
          field: "input",
          name: "title",
          required: true,
        },
        {
          label: "Enter video description (optional)",
          field: "textarea",
          name: "description",
        },
      ],
    },
    {
      name: "Job Description Ideas",
      desc: "An AI tool that generates detailed job description ideas based on your job title and responsibilities.",
      category: "HR",
      icon: "https://cdn-icons-png.flaticon.com/128/3875/3875825.png",
      aiPrompt:
        "Give me 5 job description ideas in bullet points only based on the given job title and responsibilities.",
      slug: "generate-job-description-ideas",
      form: [
        {
          label: "Enter job title",
          field: "input",
          name: "title",
          required: true,
        },
        {
          label: "Enter job responsibilities",
          field: "textarea",
          name: "responsibilities",
        },
      ],
    },
    {
      name: "SEO Keyword Ideas",
      desc: "An AI tool that generates SEO keyword ideas based on your website content and target audience.",
      category: "SEO",
      icon: "https://cdn-icons-png.flaticon.com/128/825/825500.png",
      aiPrompt:
        "Generate 10 SEO keyword ideas in bullet points only based on the given website content and target audience.",
      slug: "generate-seo-keyword-ideas",
      form: [
        {
          label: "Enter website content",
          field: "textarea",
          name: "content",
          required: true,
        },
        {
          label: "Enter target audience",
          field: "textarea",
          name: "audience",
        },
      ],
    },
    {
      name: "App Feature Ideas",
      desc: "An AI tool that generates innovative app feature ideas based on your app type and user needs.",
      category: "App Development",
      icon: "https://cdn-icons-png.flaticon.com/128/882/882704.png",
      aiPrompt:
        "Give me 5 app feature ideas in bullet points only based on the given app type and user needs.",
      slug: "generate-app-feature-ideas",
      form: [
        {
          label: "Enter app type",
          field: "input",
          name: "type",
          required: true,
        },
        {
          label: "Enter user needs",
          field: "textarea",
          name: "needs",
        },
      ],
    },
    {
      name: "Marketing Campaign Ideas",
      desc: "An AI tool that generates creative marketing campaign ideas based on your product and target market.",
      category: "Marketing",
      icon: "https://cdn-icons-png.flaticon.com/128/2620/2620637.png",
      aiPrompt:
        "Give me 5 marketing campaign ideas in bullet points only based on the given product and target market.",
      slug: "generate-marketing-campaign-ideas",
      form: [
        {
          label: "Enter product name",
          field: "input",
          name: "product",
          required: true,
        },
        {
          label: "Enter target market",
          field: "textarea",
          name: "market",
        },
      ],
    },
    {
      name: "Podcast Topic Ideas",
      desc: "An AI tool that generates interesting podcast topic ideas based on your niche and audience.",
      category: "Podcasting",
      icon: "https://cdn-icons-png.flaticon.com/128/2620/2620617.png",
      aiPrompt:
        "Give me 5 podcast topic ideas in bullet points only based on the given niche and audience.",
      slug: "generate-podcast-topic-ideas",
      form: [
        {
          label: "Enter podcast niche",
          field: "input",
          name: "niche",
          required: true,
        },
        {
          label: "Enter target audience",
          field: "textarea",
          name: "audience",
        },
      ],
    },
    {
      name: "Tagline Generator",
      desc: "An AI tool that generates catchy taglines based on your brand and product offerings.",
      category: "Branding",
      icon: "https://cdn-icons-png.flaticon.com/128/4247/4247727.png",
      aiPrompt:
        "Generate 5 catchy taglines in bullet points only based on the given brand and product offerings.",
      slug: "generate-taglines",
      form: [
        {
          label: "Enter brand name",
          field: "input",
          name: "brand",
          required: true,
        },
        {
          label: "Enter product offerings",
          field: "textarea",
          name: "offerings",
        },
      ],
    },
    {
      name: "Recipe Ideas",
      desc: "An AI tool that generates delicious recipe ideas based on your available ingredients.",
      category: "Cooking",
      icon: "https://cdn-icons-png.flaticon.com/128/1046/1046843.png",
      aiPrompt:
        "Give me 5 recipe ideas in bullet points only based on the provided ingredients.",
      slug: "generate-recipe-ideas",
      form: [
        {
          label: "Enter available ingredients",
          field: "textarea",
          name: "ingredients",
          required: true,
        },
      ],
    },
    {
      name: "Gift Ideas",
      desc: "An AI tool that generates unique gift ideas based on the recipient's interests and occasion.",
      category: "Lifestyle",
      icon: "https://cdn-icons-png.flaticon.com/128/1606/1606259.png",
      aiPrompt:
        "Give me 5 unique gift ideas in bullet points only based on the recipient's interests and occasion.",
      slug: "generate-gift-ideas",
      form: [
        {
          label: "Enter recipient's interests",
          field: "textarea",
          name: "interests",
          required: true,
        },
        {
          label: "Enter occasion",
          field: "input",
          name: "occasion",
        },
      ],
    },
    
    {
      name: "Travel Destination Ideas",
      desc: "An AI tool that suggests travel destinations based on your preferences and travel dates.",
      category: "Travel",
      icon: "https://cdn-icons-png.flaticon.com/128/3050/3050243.png",
      aiPrompt:
        "Suggest 5 travel destinations in bullet points only based on the provided preferences and travel dates.",
      slug: "generate-travel-destination-ideas",
      form: [
        {
          label: "Enter travel preferences",
          field: "textarea",
          name: "preferences",
          required: true,
        },
        {
          label: "Enter travel dates",
          field: "input",
          name: "dates",
        },
      ],
    },
    {
      name: "Workout Routine Ideas",
      desc: "An AI tool that generates personalized workout routine ideas based on your fitness goals.",
      category: "Health & Fitness",
      icon: "https://cdn-icons-png.flaticon.com/128/3251/3251899.png",
      aiPrompt:
        "Give me 5 workout routine ideas in bullet points only based on the given fitness goals.",
      slug: "generate-workout-routine-ideas",
      form: [
        {
          label: "Enter fitness goals",
          field: "textarea",
          name: "goals",
          required: true,
        },
      ],
    },
    {
      name: "Book Title Ideas",
      desc: "An AI tool that generates captivating book title ideas based on your book summary.",
      category: "Writing",
      icon: "https://cdn-icons-png.flaticon.com/128/3265/3265697.png",
      aiPrompt:
        "Give me 5 book title ideas in bullet points only based on the provided book summary.",
      slug: "generate-book-title-ideas",
      form: [
        {
          label: "Enter book summary",
          field: "textarea",
          name: "summary",
          required: true,
        },
      ],
    },
    {
      name: "Sales Email Templates",
      desc: "An AI tool that generates persuasive sales email templates based on your sales pitch and target customer.",
      category: "Sales",
      icon: "https://cdn-icons-png.flaticon.com/128/3875/3875807.png",
      aiPrompt:
        "Give me 3 sales email templates in rich text editor format based on the provided sales pitch and target customer.",
      slug: "generate-sales-email-templates",
      form: [
        {
          label: "Enter sales pitch",
          field: "textarea",
          name: "pitch",
          required: true,
        },
        {
          label: "Enter target customer",
          field: "input",
          name: "customer",
        },
      ],
    },
    {
      name: "LinkedIn Profile Headlines",
      desc: "An AI tool that generates attention-grabbing LinkedIn profile headlines based on your career goals and industry.",
      category: "Career",
      icon: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
      aiPrompt:
        "Give me 5 LinkedIn profile headline ideas in bullet points only based on the given career goals and industry.",
      slug: "generate-linkedin-profile-headlines",
      form: [
        {
          label: "Enter career goals",
          field: "input",
          name: "goals",
          required: true,
        },
        {
          label: "Enter industry",
          field: "input",
          name: "industry",
        },
      ],
    },
    {
      name: "Creative Writing Prompts",
      desc: "An AI tool that generates creative writing prompts to spark your imagination.",
      category: "Writing",
      icon: "https://cdn-icons-png.flaticon.com/128/748/748113.png",
      aiPrompt:
        "Give me 5 creative writing prompts in bullet points only to help with inspiration based on your preferred genre.",
      slug: "generate-creative-writing-prompts",
      form: [
        {
          label: "Enter preferred genre",
          field: "input",
          name: "genre",
          required: true,
        },
      ],
    },
    {
      name: "Customer Survey Questions",
      desc: "An AI tool that generates effective customer survey questions based on your survey goals and target audience.",
      category: "Survey",
      icon: "https://cdn-icons-png.flaticon.com/128/2822/2822053.png",
      aiPrompt:
        "Give me 10 customer survey questions in bullet points only based on the provided survey goals and target audience.",
      slug: "generate-customer-survey-questions",
      form: [
        {
          label: "Enter survey goals",
          field: "textarea",
          name: "goals",
          required: true,
        },
        {
          label: "Enter target audience",
          field: "input",
          name: "audience",
        },
      ],
    },
    {
      name: "Podcast Episode Titles",
      desc: "An AI tool that generates catchy podcast episode titles based on your episode content and theme.",
      category: "Podcast",
      icon: "https://cdn-icons-png.flaticon.com/128/1148/1148950.png",
      aiPrompt:
        "Give me 5 podcast episode title ideas in bullet points only based on the given episode content and theme.",
      slug: "generate-podcast-episode-titles",
      form: [
        {
          label: "Enter episode content",
          field: "textarea",
          name: "content",
          required: true,
        },
        {
          label: "Enter episode theme",
          field: "input",
          name: "theme",
        },
      ],
    },
    {
      name: "White Paper Titles",
      desc: "An AI tool that generates engaging white paper titles based on your white paper topic and objectives.",
      category: "White Papers",
      icon: "https://cdn-icons-png.flaticon.com/128/4268/4268708.png",
      aiPrompt:
        "Give me 5 white paper title ideas in bullet points only based on the given white paper topic and objectives.",
      slug: "generate-white-paper-titles",
      form: [
        {
          label: "Enter white paper topic",
          field: "input",
          name: "topic",
          required: true,
        },
        {
          label: "Enter objectives",
          field: "textarea",
          name: "objectives",
        },
      ],
    },
    {
      name: "Influencer Collaboration Ideas",
      desc: "An AI tool that generates creative ideas for collaborating with influencers based on your brand and goals.",
      category: "Influencer Marketing",
      icon: "https://cdn-icons-png.flaticon.com/128/733/733550.png",
      aiPrompt:
        "Give me 5 influencer collaboration ideas in bullet points only based on the provided brand and goals.",
      slug: "generate-influencer-collaboration-ideas",
      form: [
        {
          label: "Enter brand name",
          field: "input",
          name: "brand",
          required: true,
        },
        {
          label: "Enter collaboration goals",
          field: "textarea",
          name: "goals",
        },
      ],
    },
    {
      name: "Customer Persona Ideas",
      desc: "An AI tool that generates detailed customer persona profiles based on your target market and goals.",
      category: "Marketing",
      icon: "https://cdn-icons-png.flaticon.com/128/2920/2920371.png",
      aiPrompt:
        "Give me 3 customer persona ideas in bullet points only based on the provided target market and goals.",
      slug: "generate-customer-persona-ideas",
      form: [
        {
          label: "Enter target market",
          field: "input",
          name: "market",
          required: true,
        },
        {
          label: "Enter marketing goals",
          field: "textarea",
          name: "goals",
        },
      ],
    },
    {
      name: "Training Program Outlines",
      desc: "An AI tool that generates structured training program outlines based on your training objectives and audience.",
      category: "Training",
      icon: "https://cdn-icons-png.flaticon.com/128/2891/2891222.png",
      aiPrompt:
        "Give me 5 training program outline ideas in bullet points only based on the provided training objectives and audience.",
      slug: "generate-training-program-outlines",
      form: [
        {
          label: "Enter training objectives",
          field: "textarea",
          name: "objectives",
          required: true,
        },
        {
          label: "Enter audience details",
          field: "input",
          name: "audience",
        },
      ],
    },
    {
      name: "Sales Pitch Ideas",
      desc: "An AI tool that generates compelling sales pitch ideas based on your product and target market.",
      category: "Sales",
      icon: "https://cdn-icons-png.flaticon.com/128/1036/1036885.png",
      aiPrompt:
        "Give me 5 sales pitch ideas in bullet points only based on the provided product and target market.",
      slug: "generate-sales-pitch-ideas",
      form: [
        {
          label: "Enter product name",
          field: "input",
          name: "product",
          required: true,
        },
        {
          label: "Enter target market",
          field: "input",
          name: "market",
        },
      ],
    },
    {
      name: "Client Proposal Templates",
      desc: "An AI tool that generates client proposal templates based on your project scope and client requirements.",
      category: "Proposals",
      icon: "https://cdn-icons-png.flaticon.com/128/2912/2912505.png",
      aiPrompt:
        "Give me 3 client proposal templates in rich text editor format based on the provided project scope and client requirements.",
      slug: "generate-client-proposal-templates",
      form: [
        {
          label: "Enter project scope",
          field: "textarea",
          name: "scope",
          required: true,
        },
        {
          label: "Enter client requirements",
          field: "textarea",
          name: "requirements",
        },
      ],
    },
    {
      name: "Freelance Project Ideas",
      desc: "An AI tool that generates creative freelance project ideas based on your skills and interests.",
      category: "Freelance",
      icon: "https://cdn-icons-png.flaticon.com/128/3315/3315495.png",
      aiPrompt:
        "Give me 5 freelance project ideas in bullet points only based on the provided skills and interests.",
      slug: "generate-freelance-project-ideas",
      form: [
        {
          label: "Enter your skills",
          field: "textarea",
          name: "skills",
          required: true,
        },
        {
          label: "Enter your interests",
          field: "textarea",
          name: "interests",
        },
      ],
    },
    {
      name: "Ad Campaign Ideas",
      desc: "An AI tool that generates innovative ad campaign ideas based on your product and marketing goals.",
      category: "Advertising",
      icon: "https://cdn-icons-png.flaticon.com/128/2734/2734904.png",
      aiPrompt:
        "Give me 5 ad campaign ideas in bullet points only based on the provided product and marketing goals.",
      slug: "generate-ad-campaign-ideas",
      form: [
        {
          label: "Enter product details",
          field: "textarea",
          name: "product",
          required: true,
        },
        {
          label: "Enter marketing goals",
          field: "textarea",
          name: "goals",
        },
      ],
    },
    {
      name: "Market Research Reports",
      desc: "An AI tool that generates market research reports based on your industry and research objectives.",
      category: "Market Research",
      icon: "https://cdn-icons-png.flaticon.com/128/1144/1144854.png",
      aiPrompt:
        "Give me a market research report based on the provided industry and research objectives.",
      slug: "generate-market-research-reports",
      form: [
        {
          label: "Enter industry",
          field: "input",
          name: "industry",
          required: true,
        },
        {
          label: "Enter research objectives",
          field: "textarea",
          name: "objectives",
        },
      ],
    },
    {
      name: "Content Marketing Strategies",
      desc: "An AI tool that generates content marketing strategies based on your brand and target audience.",
      category: "Content Marketing",
      icon: "https://cdn-icons-png.flaticon.com/128/2737/2737431.png",
      aiPrompt:
        "Give me 5 content marketing strategy ideas in bullet points only based on the provided brand and target audience.",
      slug: "generate-content-marketing-strategies",
      form: [
        {
          label: "Enter brand name",
          field: "input",
          name: "brand",
          required: true,
        },
        {
          label: "Enter target audience",
          field: "input",
          name: "audience",
        },
      ],
    },
  ];
  