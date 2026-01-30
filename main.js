
import { GoogleGenerativeAI } from "@google/generative-ai";

// 1. DATA CONFIGURATION
const TECH_STACK = [
  // --- Core Backend & Real-time ---
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
  { name: 'SignalR', icon: 'https://raw.githubusercontent.com/dotnet/brand/main/logo/dotnet-logo.png' }, // Use .NET logo or custom SVG
  { name: 'WebSockets', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg' },

  // --- AI & Intelligence ---
  { name: 'RAG', icon: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png' },
  { name: 'MCP', icon: 'https://gl.itp.io/anthropic-mcp/mcp-logo.png' }, // Model Context Protocol
  { name: 'Semantic Kernel', icon: 'https://raw.githubusercontent.com/microsoft/semantic-kernel/main/docs/logo.svg' },
  { name: 'Pinecone', icon: 'https://avatars.githubusercontent.com/u/55641121?s=200&v=4' },

  // --- DevOps & Cloud ---
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },

  // --- Mobile & Frontend ---
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
];

const PROJECTS = [
  { title: 'FalconEx', tags: ['C#', '.NET6', 'GoogleMap API','Websocket'], img: '/img/falconex.png', desc: 'FalconEx is a smart on-demand logistics and mobility platform, similar to Uber, enables real-time order and delivery tracking.', url: 'https://falcon-new-admin.vercel.app/'},
  { title: 'Zheeta', tags: ['C#', '.NET', 'Azure', 'CosmosDb', 'SignalR',], img: '/img/zheeta.png', desc: 'Zheeta is an affiliate-oriented social networking platform designed to connect and empower users—especially Africans—through photo/video sharing, social interactions, events, and monetisation opportunities.', url: 'https://zheeta.com/' },
  { title: 'Tatizo', tags: ['C#','.NET', 'Azure', 'Websocket', 'RBAC'], img: '/img/tatizo.png', desc: 'Tatizo is a multi-tenant application with varies business management features to streamline team collaboration and communication', url: 'https://tatizo-website.vercel.app/'},
  { title: 'Docazy', tags: ['JS', 'Nodejs', 'Grok AI', 'Google Map API'], img: '/img/docazy.png', desc: 'Docazy is a web-based community platform that allows users to report and track local incidents such as accidents, lost & found items, and public safety updates in real time.', url: 'https://docazy.com/'},
  { title: 'Mediprep', tags: ['Typescript', 'Azure', 'Kafka', 'Docker', 'VPS',], img: '/img/mediprep.png', desc: 'Mediprep Pro is an online medical exam preparation platform designed to help doctors, nurses, and health professionals practice and improve their exam readiness.', url: 'https://www.mediprep.net/' },
  { title: 'Fynda', tags: ['C#', '.NET6', 'Azure SignalR','MySQL',], img: '/img/fynda.png', desc: 'Fynda is a mobile application that ensures a hassle-free experience in discovering the perfect, budget-friendly hostels, make payment, connect with students and chat with the agents and landlords', url: 'https://fynda.vercel.app/' },
  { title: 'KampusVillage', tags: ['C#', '.NET8', 'Postgres', 'CQRs', 'Escrow',], img: '/img/km.png', desc: 'KampusVillage is a one-stop app where students buy, sell, and trade used goods, find books, roommates, jobs, and even shout out for what they need to buy. It accommodates Vendors, Runners and Artisans.', url: 'https://kampusvillage.com.ng/' },
  { title: 'CutSession', tags: ['Typescript', 'Nodejs', 'MongoDb'], img: '/img/2-logo-Open-Studio.jpg', desc: 'CutSession is an application where users can schedule pre-wedding photo session and also book any sessions of their interests.' , url: 'https://github.com/donkennie/CutSession'}
];

const ARTICLES = [
  { title: '𝗕𝘂𝗶𝗹𝗱𝗶𝗻𝗴 𝗮 𝗟𝗼𝗰𝗮𝗹 𝗝𝗼𝗸𝗲𝗿 𝗔𝗜 𝘄𝗶𝘁𝗵 𝗦𝗲𝗺𝗮𝗻𝘁𝗶𝗰 𝗞𝗲𝗿𝗻𝗲𝗹 & 𝗢𝗹𝗹𝗮𝗺𝗮 𝗶𝗻 .𝗡𝗘𝗧', date: 'Jan 2026', link: 'https://www.linkedin.com/posts/kehinde-timothy-ajeigbe_%F0%9D%97%95%F0%9D%98%82%F0%9D%97%B6%F0%9D%97%B9%F0%9D%97%B1%F0%9D%97%B6%F0%9D%97%BB%F0%9D%97%B4-%F0%9D%97%AE-%F0%9D%97%9F%F0%9D%97%BC%F0%9D%97%B0%F0%9D%97%AE%F0%9D%97%B9-%F0%9D%97%9D%F0%9D%97%BC%F0%9D%97%B8%F0%9D%97%B2%F0%9D%97%BF-activity-7416768404071555072-Jbuy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADcWtnIBwFujT2OFfKCHo0wOrjPtVaIGtkA', img: 'https://media.licdn.com/dms/image/v2/D4E22AQHXaH4ySzYHcA/feedshare-shrink_800/B4EZu2njdfIkAg-/0/1768295382869?e=1770854400&v=beta&t=CXE9bLCXgi8a_OXFFdyrcth0OuKvhdYd-qu9Oy7lSmM' },
  { title: '𝗛𝗼𝘄 𝘁𝗼 𝗰𝗼𝗻𝗳𝗶𝗴𝘂𝗿𝗲 𝗦𝗶𝗴𝗻𝗮𝗹𝗥 𝘀𝗲𝗿𝘃𝗲𝗿 𝗶𝗻 .𝗡𝗘𝗧', date: 'Oct 2024', link: 'https://www.linkedin.com/posts/kehinde-timothy-ajeigbe_csharp-signalr-activity-7251569034926694400-IgIW?utm_source=share&utm_medium=member_desktop&rcm=ACoAADcWtnIBwFujT2OFfKCHo0wOrjPtVaIGtkA', img: 'https://media.licdn.com/dms/image/v2/D5622AQFD9tSRNZvVww/feedshare-shrink_800/feedshare-shrink_800/0/1728908783823?e=1770854400&v=beta&t=LNoTuOY-8reyiQJACXCiwIiqSTky5ffkzDhIZAysSbM' },
  { title: '𝗨𝘀𝗶𝗻𝗴 𝗛𝘁𝘁𝗽𝗖𝗹𝗶𝗲𝗻𝘁𝗙𝗮𝗰𝘁𝗼𝗿𝘆 𝘁𝗼 𝗺𝗮𝗻𝗮𝗴𝗲 𝗛𝘁𝘁𝗽𝗖𝗹𝗶𝗲𝗻𝘁 𝗶𝗻𝘀𝘁𝗮𝗻𝗰𝗲𝘀 𝗶𝗻 .𝗡𝗘𝗧', date: 'Feb 2025', link: 'https://www.linkedin.com/posts/kehinde-timothy-ajeigbe_csharp-programming-activity-7256576219507245058-Ppp2?utm_source=share&utm_medium=member_desktop&rcm=ACoAADcWtnIBwFujT2OFfKCHo0wOrjPtVaIGtkA', img: 'https://media.licdn.com/dms/image/v2/D4D22AQFeeJ4UVs5SBw/feedshare-shrink_800/feedshare-shrink_800/0/1730102589598?e=1770854400&v=beta&t=MGmqidBbCnpqgqQBWlJebwC9wo-Q2c46yZJxiqnB34A' },
  { title: '𝗦𝗲𝗿𝘃𝗲𝗿𝗹𝗲𝘀𝘀 𝗔𝗣𝗜𝘀 𝗪𝗶𝘁𝗵 𝗔𝘇𝘂𝗿𝗲 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝘀 & 𝗔𝘇𝘂𝗿𝗲 𝗦𝗤𝗟', date: 'Oct 2025', link: 'https://www.linkedin.com/posts/kehinde-timothy-ajeigbe_serverless-api-activity-7383428512222875648-QEvr?utm_source=share&utm_medium=member_desktop&rcm=ACoAADcWtnIBwFujT2OFfKCHo0wOrjPtVaIGtkA', img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAADVCAMAAACMuod9AAABKVBMVEX///8UkN9Q5v/+rBn+rxj+pBr+oxr+qxn/vRX+qBn+phr/yRL/xhP/whT/uxb/uRb+tRf/1BD/0BH/1RAAid3+rQD/26r+pgD/5cYAh90+5P/+nAAOi92p8f/+oADZ+f+U7/+jzvBS6v//+/Wj8f//twB1tuk8xfLh7/p7ueqq0fFbq+b/8tj+sADM9///8cHQ5veD7P9M3/wrquj/++z/56b/3Y3/0Gz/ymL/79FmsOj+47eZzfAYlOAwzfX/8uL+uVz+yIb/2zz/4F7/5Hb/77j/2Db/5o7/2Ez/7bz/3n3/zS7/4pv/2Xc7n+P/yDj/4ab+w0n+vkL+1I7+tzCp3PX+ynuRzvHt/f/+wmP+u1D+1Jz+x3v/6s/+skD+tVL+qTL+u2n+woAhtWR6AAAJtklEQVR4nO2c+0PTVhTHbwuKgk9Gm0JKYFQUB/jEJ9OCm87NOSeyDeUh+P//EUto+khyz805597ccFu/P0pM74dPvknIaStECXn26gdeflkrY7l6+ZXJGqVV9uKpuTt9nZ/XZa+emrcasNcflb16Yu7qwF7fKHv5xLzRgb1b9uqJ0Wnt9G9lr56aV9PsXH9b9uKpucuHnXautOKNBq1rpdVS61xpddQ6V1rxWkOtc6UVGrDOlVZH7R9lr52ed2xY90orXk+xad0rrZjm0k65V1q+2ikHSyveTTHjYGlDtcy4WNqwtcz8XvbKGXnEhXWxtIIL62Jp+WpdLC1X7SUXSyseXeLBOllaMcWjfVf2ullhqnWztK2pS6w4NwY5zZ88WDdL2+LBfih73bww1TpZWqbay05eaUO1lzmw78teNjMstY6WNlRLz6XL7bKXzUvYWgauo6UVjxmszpa2xYF1tbQ8tWfyXVEre7mbbHBgodvjleczs3/dM8uAzu1mZXUlZxuO2ifAvlYqzUqlMvuTaQ5Ubs9UKs2m+lfdukCHhUq7UumkFNwINowal6MWuNJ2YSuVGfu4Mawal9HaC3/Ld9WHLcFuD1aJy1ALlHblxQCtbbsDsArcjQvkXJbvadCsdbsJWBj3MZ1WfqVNmj19SXu4KVgIl652WV7atFmrdjOwAO57Mi1Q2tWmBNdSdyWwYbK3VXS1H+RvLF+RwVqyK4dt/pzZkKx2Gbg9vid9RSt25bCV5mp6Q7JaoLSgWwt2AdhK83Z6S7Ja6PYYftGi7YKvO5s+TbWXqbSKT4NIT1OF24V/yT+mN31CpIVK2wmIW6Dd2+CvOHOOCtVeoQQsbRz7uDfxZkO1NFi4tHFsH8zwYZy9+rRpsFdUpY1j1y7FLFkt5kGUTbsUs1S1eaWNY88uaHZWYjZUe5WQ5afIRdiySzIr1pavUGivoD93accuzax4SlGLK20cG3ZpZkO1pOMYV9o4xdu9Cf5CpWZpatGljbMKHmZmcEmXHkFViy9tHBDXiF2qWaLaZ+QFFWmXalasrRNg10mljQPbBZaEDtksSS21tHGKsks2K54R1F67yvyGAxhXxy7drPhIULtOL22cIi5EdLMktazSxjFvFzSrOBs8vYYOs7RxTNtlmA3V4mm5pY1j9szMMSs+4mH5pY1j0i7jBEVSq1PaOObuqlhmxUc07bpWaeM8N4TLMktqrZHvEjJjl2dW7OCPY93SxoHt4k9VPLOigT+OP2lzxtG3y7n0RNnB0hopbRxdu0yzolFDH8gmvwBMzy7XrNhdH0flWs1QaeM8551kTkN84NZPo4aDHa8ZK20cvl3YbN7/3EGqXf9iirIX0G6OIbZZvNr1Ar61j2cXvs7mNn4HexybLW0cTnfZJyghNpFqjZc2Dv1CpGFW7CJhzZc2DtWuhlmC2rpeNmFc0vLhmwrEVRqpNsTVzS54koPtZuc3zD8EOsGqNRBF8WG7aVwts3i1Bmh34GVg7WqZtatWNf/E4YLHAO7huz21tbp6JfCzqj4u/CtBwdatqc2DxdiF386H+4t4fMwSrIe4NYGn9/+c/vzerJZZe2q9fcxyQLuVedWPsQMzW63FmFXxNG9F7xjPfEKBZFbUvbMFC+M+XBRiRd5a9FMsS631/sXCgpeYF0sQLRq27o3ZCAUWtLu0J38f+8x/yP22du3AfqbAAmfmF0sLYk/S25lb4Q9QsaOWCju/9DCL23wYuhW3Mj9o3lqqzuFwazZga1TYuaoEt/kyol2UmK1Wcbj7NtRSHwGEsNUsbqj2fvjDvZfJf2+ewqJwW2MTxcN6HNgwKdwXDzpA8wncmRg2TC6uDbXeEQ82ZTeEvdHZ4MbLrFmM3ZaF1taOaE9ke7BJ3BB2sbvJjZ7dAbP5di2oVTyZyYMdxB2E7eM2k7Bqu63xwmEndGD7uEnYLm7KbI7d1njR56iJcS3YLm4atoObNptn93PBR/LEGO3rwzKwHdwsbIQrMau22x7ziJkgpUb72iUJbIRbeVDNwIa4D6SwSruHDUoOt0m4YwZgw0jMnuICm+dfd7H5QoH1zMBW5bAwLvKeOTebFLU12hcRkWHh/2IId4xi9pC0awZswXbrBLU2YIu1i1d70WuQ9syELdIuQa0t2OLstryLaFh4SktZMQK2MLv7aLU2YQuyG6pFxssd9iQC3iXgYIux+wlLG6DmH71omlXtgo+7gYXFDXt60Tar2gkbdxtJa9+sajdM3DYS1tsm7daI2ShmcU9wtAEN1pBZ1a44uEi1wQFpr8bMRjGI+xlFS4Q1aFa1OzLuWoCB9U5IOzVqNoop3C2M2oAGa9hsFDMXokOM2mDLyMo0YA3ZPZp0A9aI3QZCrfeVtKoCDmP1jufuYPdwNJmbgDbGK8hsFN2DuRHkw9ImW4WZVe0cafc4F9ajwcJmb7D4kLtH2a3nqvWOz45Z1QtgcPPV0mALNhuFj1sPzuVkkjTZKtys6kVycT2zsAWejQfDPFXt56mdJA17LMEy7bYmc2Bpky1rsDy72zlqJ0nzD4uwHNxWoHYbkMZ4VmEZuDlqA0NmjV16kiHittVqA9Kwx7LZKDTcA5XaSVOwBZmNQsFtK49j/6ybjULAPVHRBqTJVilmo4C46a/wb/sqs6TJlpXbRdJLZ+RuKdTSYPcA1sLNRgFwF5NbHRqDFQvQ4bSY+18NRIo7N5/c6CtM69MmW2IPOJosmI0iwZ27n9ykAbfWpw17wpRoNkoGNw0rjs6bg5UeyrbMRknhZmAb4HFMHPZ0cieDaxM2hZuBFcegWQ5sFtcubAI3C7sJtZY47OkniWsbdgA3CwuqZcMmce3D9nAlsNCjN+KwJ5k+bhmwMa4EVkzKT8hasH3ccmDDK8P9anU++8/7/nlZNGG7uGXBAmmdk8PSxniyLFTn5tL3bGVnP5DCEj+gJs+CsTf9G0pLDkubfziTbRktcWbpTNpS2CE1Kw4ktEMLuyG7+pyjfUDNnZxI1NImWw5F1tpgWGHFVpZ2eGEPs60dXljxNaOWNtlyKlm1/vDCiqMMLO0zW06lkVY7zLAZtT7tM1tuZdMfIVhxnIKlDXscS90fIdiUWupky7EkH70NOWwraZY+2XIqCbXDDpt49OZ/K3s5BWd7QC1zjOdONoIRghXf+mr9rbIXU3TaA7D8maUrOejR+vrDnrOe9ijBipMurW9ksnW203s+Mwpme09V/WGdfwym+3xmaIc9iRyNEmys1j8e1slWIt1Hb8M7EhhI91o7ErCdp1H+iMCe/qnnb40IbPjXj388zBOBZA63hvtJ6vd8z/eUnv8Bd2WM12oPpnwAAAAASUVORK5CYII=' },
  { title: '𝗔𝘃𝗼𝗶𝗱 𝗧𝗵𝗶𝘀 𝗘𝗙 𝗖𝗼𝗿𝗲 𝗣𝗲𝗿𝗳𝗼𝗿𝗺𝗮𝗻𝗰𝗲 𝗣𝗶𝘁𝗳𝗮𝗹𝗹 ', date: 'April 2025', link: 'https://www.linkedin.com/posts/kehinde-timothy-ajeigbe_efcore-dotnet-csharp-activity-7326946405615337472-ZA3P?utm_source=share&utm_medium=member_desktop&rcm=ACoAADcWtnIBwFujT2OFfKCHo0wOrjPtVaIGtkA', img: 'https://media.licdn.com/dms/image/v2/D4D22AQFwB4bfyXOECQ/feedshare-shrink_800/B4DZa6K5_eHsAk-/0/1746880149526?e=1770854400&v=beta&t=6SKVE8YKeUeCHZsDh411GcSqUUuEgAPBd3xcKy8FMug' },
  { title: '𝗦𝘁𝗿𝗲𝗮𝗺𝗶𝗻𝗴 𝗶𝗻 𝗦𝗶𝗴𝗻𝗮𝗹𝗥 𝘄𝗶𝘁𝗵 .𝗡𝗘𝗧', date: 'June 2025', link: 'https://www.linkedin.com/posts/kehinde-timothy-ajeigbe_csharp-dotnet-signalr-activity-7379855374587342848-Ddkj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADcWtnIBwFujT2OFfKCHo0wOrjPtVaIGtkA', img: 'https://media.licdn.com/dms/image/v2/D4D22AQGy3lGb1WvEVg/feedshare-shrink_800/B4DZmqDWFcGwAg-/0/1759494630576?e=1770854400&v=beta&t=uxx_Ok_XSto-i17H9ep_y2SgYUedydQh0f0jug_ZoyI' },
  { title: '𝗨𝘀𝗶𝗻𝗴 𝗢𝘂𝘁𝗽𝘂𝘁 𝗖𝗮𝗰𝗵𝗶𝗻𝗴 𝗶𝗻 𝗔𝗦𝗣.𝗡𝗘𝗧 𝗖𝗼𝗿𝗲 𝘁𝗼 𝗜𝗺𝗽𝗿𝗼𝘃𝗲 𝗣𝗲𝗿𝗳𝗼𝗿𝗺𝗮𝗻𝗰𝗲', date: 'Sept 2025', link: 'https://www.linkedin.com/posts/kehinde-timothy-ajeigbe_programming-csharp-caching-activity-7310983422846377985--tfI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADcWtnIBwFujT2OFfKCHo0wOrjPtVaIGtkA', img: 'https://media.licdn.com/dms/image/v2/D4D22AQFgx64O3tYD7A/feedshare-shrink_800/B4DZXXUqx8G8Ak-/0/1743074278384?e=1770854400&v=beta&t=ox2TJWbZQ7PfOV0q8MTSlO4Zo3C7g12F01LDJ3ywgXk' },
  { title: 'Classes vs Records in C#', date: 'Mar 2023', link: 'https://donkennie.hashnode.dev/how-and-when-to-use-class-and-record-type-in-c', img: '/img/Screenshot (54).png' },
  { title: '𝗥𝗲𝗴𝗶𝘀𝘁𝗲𝗿𝗶𝗻𝗴 𝘀𝗲𝗿𝘃𝗶𝗰𝗲𝘀 𝘄𝗶𝘁𝗵 𝗮𝗻 𝗲𝘅𝘁𝗲𝗻𝘀𝗶𝗼𝗻 𝗺𝗲𝘁𝗵𝗼𝗱', date: 'Jan 2025', link: 'https://www.linkedin.com/posts/kehinde-timothy-ajeigbe_csharp-dotnet-di-activity-7338880663925719040-OUGz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADcWtnIBwFujT2OFfKCHo0wOrjPtVaIGtkA', img: 'https://media.licdn.com/dms/image/v2/D4D22AQG328pC5J8EKw/feedshare-shrink_800/B4DZdjxDvaG8Ag-/0/1749725499398?e=1770854400&v=beta&t=niu8egIAcFIQFXDsVZnSc9ivfudVPAhcWgqr7QfANYI' },

  { title: '𝗠𝗮𝗻𝗮𝗴𝗶𝗻𝗴 𝗘𝘃𝗲𝗻𝘁𝘀 𝗶𝗻 𝗦𝗶𝗴𝗻𝗮𝗹𝗥 𝘄𝗶𝘁𝗵 𝗖# .𝗡𝗘𝗧 𝟵', date: 'July 2025', link: 'https://www.linkedin.com/posts/kehinde-timothy-ajeigbe_programming-csharp-signalr-activity-7306631362688540672-_U7h?utm_source=share&utm_medium=member_desktop&rcm=ACoAADcWtnIBwFujT2OFfKCHo0wOrjPtVaIGtkA', img: 'https://media.licdn.com/dms/image/v2/D4D22AQF-f1PG52kLug/feedshare-shrink_800/B4DZWZefPMGkAk-/0/1742036666648?e=1770854400&v=beta&t=g7GnT-bD1fwHythTNncIV0Y-D5MsH3GmK8xByVHOkJw' },
  { title: '𝗨𝘀𝗶𝗻𝗴 𝘁𝗵𝗲 𝘀𝗵𝗼𝗿𝘁-𝗰𝗶𝗿𝗰𝘂𝗶𝘁 𝗺𝗶𝗱𝗱𝗹𝗲𝘄𝗮𝗿𝗲 𝗶𝗻 .𝗡𝗘𝗧 𝟴', date: 'June 2025', link: 'https://www.linkedin.com/posts/kehinde-timothy-ajeigbe_csharp-dotnet-programming-activity-7260254569257988096-An5G?utm_source=share&utm_medium=member_desktop&rcm=ACoAADcWtnIBwFujT2OFfKCHo0wOrjPtVaIGtkA', img: 'https://media.licdn.com/dms/image/v2/D4D22AQHCOPt9uKuB0Q/feedshare-shrink_800/feedshare-shrink_800/0/1730979576971?e=1770854400&v=beta&t=R7RR00kVa--p_jqX8s-YbipCAYQ16UHkgydQw7Vpr5k' },
  { title: 'Bubble-Sort Algorithms', date: 'Feb 2023', link: 'https://www.linkedin.com/posts/kehinde-timothy-ajeigbe_mydaytodayalgorithms-activity-7102394560017764352-1oL_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADcWtnIBwFujT2OFfKCHo0wOrjPtVaIGtkA', img: 'https://media.licdn.com/dms/image/v2/D4D22AQHm2h9zHTavjw/feedshare-shrink_800/feedshare-shrink_800/0/1693342817759?e=1770854400&v=beta&t=cd7UYq_6TOEcI9jwFvwqxn_q_vsipGltx0eCjYJ2jh0' },
];

// 2. DOM INITIALIZATION
const init = () => {
  renderTechStackMarquee();
  renderProjects();
  renderArticles();
  setupScrollReveal();
  setupChat();
  setupNav();
  setupTerminal();
  setupSplashes();
};

const renderTechStackMarquee = () => {
  const track = document.getElementById('tech-marquee');
  // Double stack for seamless loop
  const combined = [...TECH_STACK, ...TECH_STACK];
  track.innerHTML = combined.map(tool => `
        <div class="flex items-center gap-4 px-12 opacity-60 hover:opacity-100 hover:text-[#F6A621] transition-all cursor-default">
            <img src="${tool.icon}" class="w-6 h-6 grayscale hover:grayscale-0 transition-all" alt="${tool.name}">
            <span class="text-xs font-bold tracking-[0.4em] uppercase">${tool.name}</span>
        </div>
    `).join('');
};

const renderProjects = () => {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = PROJECTS.map((p, i) => `
        <div class="reveal group relative bg-[#121212] border border-white/10 rounded-3xl overflow-hidden hover:border-[#F6A621]/40 transition-all duration-500" style="transition-delay: ${i * 100}ms">
            <div class="h-64 overflow-hidden relative">
                <img src="${p.img}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <div class="p-8">
                <h3 class="text-2xl font-bold mb-2">${p.title}</h3>
                <p class="text-white/50 text-sm mb-6 font-light">${p.desc}</p>
                <div class="flex gap-2 mb-6">
                    ${p.tags.map(t => `<span class="px-3 py-1 bg-white/5 rounded-full md:text-[6px] lg:text-[10px] text-[8px] uppercase tracking-wider text-white/40 border border-white/5">${t}</span>`).join('')}
                </div>
                <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 font-bold text-sm text-white hover:text-[#F6A621] transition-all duration-300 group/btn">
                    View Project 
                    <i data-lucide="arrow-right" class="w-4 h-4 transition-transform group-hover/btn:translate-x-1"></i>
                </a>
            </div>
        </div>
    `).join('');
  lucide.createIcons();
};

const renderArticles = () => {
  const grid = document.getElementById('articles-grid');
  grid.innerHTML = ARTICLES.map((a, i) => `
        <div class="reveal group glass rounded-3xl p-6 hover:border-[#F6A621]/40 transition-all" style="transition-delay: ${i * 100}ms">
            <div class="h-40 overflow-hidden rounded-2xl mb-6">
                <img src="${a.img}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all">
            </div>
            <div class="text-[10px] text-[#F6A621] font-bold mb-2 tracking-widest">${a.date}</div>
            <h3 class="text-lg font-bold mb-4">${a.title}</h3>
            <a href="${a.link}" target="_blank" class="text-xs text-white/40 group-hover:text-white transition-all flex items-center gap-2">
                Read Article <i data-lucide="external-link" class="w-3 h-3"></i>
            </a>
        </div>
    `).join('');
  lucide.createIcons();
};

// 3. UTILITY LOGIC
const setupScrollReveal = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    const scrollTop = document.getElementById('scroll-top');
    if (window.scrollY > 100) {
      header.classList.add('glass', 'py-4');
      header.classList.remove('py-6');
    } else {
      header.classList.remove('glass', 'py-4');
      header.classList.add('py-6');
    }

    if (window.scrollY > 500) {
      scrollTop.classList.remove('opacity-0', 'pointer-events-none');
      scrollTop.classList.add('opacity-100');
    } else {
      scrollTop.classList.add('opacity-0', 'pointer-events-none');
      scrollTop.classList.remove('opacity-100');
    }
  });
};

const setupNav = () => {
  const btn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  // Create mobile menu container
  const mobileMenu = document.createElement('div');
  mobileMenu.id = 'mobile-menu';
  mobileMenu.className = 'fixed inset-0 z-50 items-center justify-center hidden bg-black/90 backdrop-blur-sm';
  mobileMenu.innerHTML = `
      <div class="flex flex-col items-center space-y-8 p-8">
          ${Array.from(navLinks).map(link => `
              <a href="${link.getAttribute('href')}" class="text-2xl text-white/80 hover:text-primary transition-colors">
                  ${link.textContent}
              </a>
          `).join('')}
          <button id="close-menu" class="absolute top-6 right-6 text-white/60 hover:text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2"/>
              </svg>
          </button>
      </div>
  `;
  document.body.appendChild(mobileMenu);
  
  // Toggle functions
  btn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
      document.body.style.overflow = 'hidden';
  });
  
  document.getElementById('close-menu').addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      document.body.style.overflow = '';
  });
  
  // Close menu when clicking links
  mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('flex');
          document.body.style.overflow = '';
      });
  });
};

const setupTerminal = () => {
  const commands = [
    "ssh root@vps.kennie.dev",
    "🔐 Authenticating with RSA key...",
    "Connected to Ubuntu 22.04 LTS (4 vCPU, 8GB RAM)",
    "",
    "root@vps:~# apt update && apt upgrade -y",
    "Updating package lists...",
    "Security patches applied: 12",
    "System updated successfully",
    "",
    "root@vps:~# systemctl status nginx postgresql redis",
    "● nginx.service - high performance web server",
    "   Active: active (running)",
    "● postgresql.service - PostgreSQL database server",
    "   Active: active (running)",
    "● redis-server.service - advanced key-value store",
    "   Active: active (running)",
    "",
    "root@vps:~# free -h | grep Mem:",
    "Mem:           7.8Gi       1.2Gi       6.2Gi       240Mi",
    "",
    "root@vps:~# uptime",
    " 14:30:01 up 45 days,  3:12,  1 user,  load average: 0.08, 0.03, 0.01",
    "",
    "🏢 VPS Status: OPTIMAL",
    "⚡ Performance: Excellent | Security: Patched"
];
  let currentLine = 0;
  const terminal = document.getElementById('terminal-content');
  const cursor = document.getElementById('terminal-cursor');

  const typeLine = () => {
    if (currentLine >= commands.length) return;

    const p = document.createElement('p');
    p.className = 'mb-1';
    terminal.insertBefore(p, cursor);

    const lineText = commands[currentLine];
    let charIndex = 0;

    const typeChar = () => {
      if (charIndex < lineText.length) {
        p.textContent += lineText[charIndex];
        charIndex++;
        setTimeout(typeChar, 40);
      } else {
        currentLine++;
        setTimeout(typeLine, 800);
      }
    };
    typeChar();
  };

  // Intersection observer to start typing when visible
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      typeLine();
      observer.disconnect();
    }
  });
  observer.observe(terminal);
};

// Mouse splash effect
const setupSplashes = () => {
  document.addEventListener('mousedown', (e) => {
    for (let i = 0; i < 8; i++) {
      const s = document.createElement('div');
      s.className = 'splash';
      document.body.appendChild(s);

      const angle = (i / 8) * Math.PI * 2;
      const dist = 30 + Math.random() * 20;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;

      s.style.left = e.pageX + 'px';
      s.style.top = e.pageY + 'px';
      s.style.opacity = '1';

      s.animate([
        { transform: 'translate(0,0) scale(1)', opacity: 1 },
        { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
      ], { duration: 600, easing: 'ease-out' }).onfinish = () => s.remove();
    }
  });
};

// 4. GEMINI AI CHAT LOGIC
let chatOpen = false;
window.toggleChat = () => {
  chatOpen = !chatOpen;
  const windowEl = document.getElementById('chat-window');
  const iconEl = document.getElementById('chat-icon-svg');
  windowEl.classList.toggle('hidden', !chatOpen);

  // Simple lucide icon switch
  iconEl.setAttribute('data-lucide', chatOpen ? 'x' : 'message-square');
  lucide.createIcons();
};

const setupChat = () => {
  const form = document.getElementById('chat-form');
  const input = document.getElementById('chat-input');
  const messages = document.getElementById('chat-messages');
  const sendBtn = document.getElementById('chat-send-btn');

  form.onsubmit = async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    input.value = '';
    addMessage('user', text);

    sendBtn.disabled = true;
    const sendIcon = document.getElementById('send-icon');
    sendIcon.setAttribute('data-lucide', 'loader-2');
    sendIcon.classList.add('animate-spin');
    lucide.createIcons();

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are the Digital Twin of Kehinde (Kennie) Timothy Ajeigbe. 
                    Kennie is a Software & AI Engineer with 4+ years of experience. 
                    He specializes in C#, .NET, Typescript, and integrating LLMs like Gemini.
                    Keep responses professional, concise, and helpful. 
                    Represent his portfolio of 50+ projects. 
                    Personality: Technically profound yet approachable.`
        }
      });

      const loadingId = 'loading-' + Date.now();
      addMessage('model', '', loadingId);
      const container = document.getElementById(loadingId);

      const result = await chat.sendMessageStream({ message: text });
      let fullText = '';
      for await (const chunk of result) {
        fullText += chunk.text;
        container.textContent = fullText;
        messages.scrollTop = messages.scrollHeight;
      }
    } catch (err) {
      console.error(err);
      addMessage('model', "I'm having trouble thinking right now. Please try again or email me directly at ajeigbekehinde160@gmail.com!");
    } finally {
      sendBtn.disabled = false;
      sendIcon.setAttribute('data-lucide', 'send');
      sendIcon.classList.remove('animate-spin');
      lucide.createIcons();
    }
  };
};

const addMessage = (role, text, id = null) => {
  const messages = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'}`;
  div.innerHTML = `
        <div id="${id || ''}" class="${role === 'user' ? 'bg-[#F6A621] text-black font-medium rounded-tr-none' : 'bg-white/5 border border-white/10 text-white/80 rounded-tl-none'} max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed">
            ${text}
        </div>
    `;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
};

document.addEventListener('DOMContentLoaded', init);
