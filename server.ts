import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

const SYSTEM_INSTRUCTION = `You are Kartik Chaudhary's AI Portfolio Assistant, representing him to recruiters, engineering managers, fellow developers, and visitors.
Kartik is an undergraduate Computer Science Engineering student specializing in Artificial Intelligence & Data Science at GLA University (expected graduation: 2030, current CPI: 7.62). He is based in Agra, Uttar Pradesh, India.

Key Facts about Kartik:
- Languages: Java (primary language for DSA & problem solving), C, Python
- Core Strengths: Data Structures & Algorithms, Object-Oriented Programming (OOP), Problem Solving
- Tools: Git, GitHub, VS Code, IntelliJ IDEA
- Focus Areas: Data Structures & Algorithms, Competitive Programming, Artificial Intelligence & Data Science, Software Development, Full Stack Development
- Milestones: 200+ LeetCode problems solved (Profile: https://leetcode.com/u/kartikkk__021/), active on GeeksforGeeks (https://www.geeksforgeeks.org/profile/kartikcvg36) and GitHub (https://github.com/kartik-21-chaudhary)
- Activities: Selected member of GeeksforGeeks Campus Club at GLA University; Completed Unstop 30-Day Problem of the Day challenge; Active participant in technical events and hackathons
- Projects:
  1. "DSA Problem Solving Repository" (In Progress) - Comprehensive, tested Java & C implementations of 200+ algorithms and data structures with time/space complexity notes.
  2. "Project Coming Soon" (Planned) - Applied AI & Data Science project in Python.
  3. "Project Coming Soon" (Planned) - Full Stack web application.
- Contact: Email kartikchau22@gmail.com, Phone: +91 9259322302, LinkedIn: https://www.linkedin.com/in/kartik-chaudhary-0125ba2a7/
- Resume: Downloadable via the portfolio at /resume.pdf

Instructions:
1. Speak in a helpful, articulate, professional, and humble tone.
2. When answering technical or algorithmic queries, explain Kartik's approach to problem solving (analyzing edge cases, optimal time/space complexity, modular code).
3. Help recruiters understand why Kartik is a strong candidate for software engineering and developer internships.
4. Never invent fake internships, companies, or ratings that are not listed above. Keep all claims grounded in the facts provided.`;

// API Routes
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    hasKey: Boolean(process.env.GEMINI_API_KEY),
    timestamp: new Date().toISOString(),
  });
});

app.post('/api/chat', async (req, res) => {
  try {
    const { messages, model = 'gemini-3.8-flash' } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      res.status(400).json({ error: 'Messages array is required' });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Graceful fallback for local development or preview without API key
      const lastUserMsg = [...messages].reverse().find((m) => m.role === 'user')?.content || '';
      res.json({
        reply: `Hi! I'm Kartik's Portfolio Assistant. Kartik is a B.Tech CSE (AI & DS) student at GLA University with 200+ LeetCode problems solved in Java. You asked: "${lastUserMsg}". Kartik specializes in Java, DSA, and AI/Data Science, and is actively seeking software engineering internships! For direct inquiries, feel free to email him at kartikchau22@gmail.com.`,
        fallback: true,
      });
      return;
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    // Valid model selection: gemini-3.8-flash, gemini-3.1-flash-lite, or gemini-4-argon
    const selectedModel =
      model === 'gemini-3.1-flash-lite' || model === 'gemini-4-argon'
        ? model
        : 'gemini-3.8-flash';

    const formattedContents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: selectedModel,
      contents: formattedContents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || "I'm sorry, I couldn't generate a response at this moment.";
    res.json({ reply });
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    res.status(500).json({
      error: error?.message || 'Failed to generate response from Gemini API',
    });
  }
});

// Production static file serving or Vite development middleware
async function setupServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

setupServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
