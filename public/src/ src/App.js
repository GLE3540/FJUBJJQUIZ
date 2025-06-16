import React, { useState, useEffect } from 'react';
import { ChevronLeft, Clock, Award, AlertCircle, Users, Shield, Star, History, Trophy, Target, Zap, Globe } from 'lucide-react';

// Sistema de traduções
const translations = {
  pt: {
    // Textos gerais
    appTitle: "FJU BJJ",
    appSubtitle: "CONHEÇA AS REGRAS.\nDOMINE O JOGO.",
    startQuiz: "INICIAR SIMULADO",
    studyRules: "ESTUDAR REGRAS",
    historyResults: "HISTÓRICO DE RESULTADOS",
    about: "Sobre o App",
    terms: "Termos de Uso",
    back: "Voltar",
    next: "PRÓXIMA",
    finish: "FINALIZAR",
    
    // Seleção de dificuldade
    selectDifficulty: "Escolha a Dificuldade",
    selectDifficultyDesc: "Selecione o nível do simulado",
    aboutLevels: "Sobre os níveis:",
    questions: "perguntas",
    
    // Níveis
    beginner: "Iniciante",
    intermediate: "Intermediário",
    advanced: "Avançado",
    beginnerDesc: "Perguntas básicas sobre regras fundamentais",
    intermediateDesc: "Perguntas sobre regras específicas e situações comuns",
    advancedDesc: "Perguntas complexas sobre situações específicas",
    
    // Detalhes do simulado
    quizDetails: "Detalhes do Simulado:",
    time: "Tempo:",
    minToPass: "Mínimo para passar:",
    minPercentage: "Porcentagem mínima:",
    hits: "acertos",
    
    // Resultado
    congratulations: "Parabéns!",
    almostThere: "Quase lá!",
    youHit: "Você acertou",
    of: "de",
    mode: "Modo",
    passedMessage: "Você passou no modo",
    continueEvolving: "Continue evoluindo!",
    neededHits: "Você precisava de",
    keepStudying: "Continue estudando!",
    
    // Botões resultado
    viewCorrections: "VER CORREÇÕES",
    retakeTest: "REFAZER TESTE",
    backToHome: "VOLTAR AO INÍCIO",
    
    // Correções
    corrections: "Correções",
    backToResults: "VOLTAR AOS RESULTADOS",
    
    // Histórico
    historyTitle: "Histórico de Resultados",
    noTestsYet: "Nenhum teste realizado ainda.",
    firstTest: "FAZER PRIMEIRO TESTE",
    correct: "Acertos:",
    approved: "Aprovado",
    notApproved: "Não aprovado",
    
    // Categorias
    scoring: "PONTUAÇÃO",
    penalties: "PENALIDADES",
    legalIllegalMoves: "GOLPES LEGAIS/ILEGAIS",
    rulesByBelt: "REGRAS POR FAIXA",
    refereeConduct: "CONDUTA DO ÁRBITRO"
  },
  
  en: {
    // General texts
    appTitle: "FJU BJJ",
    appSubtitle: "KNOW THE RULES.\nMASTER THE GAME.",
    startQuiz: "START QUIZ",
    studyRules: "STUDY RULES",
    historyResults: "RESULTS HISTORY",
    about: "About",
    terms: "Terms of Use",
    back: "Back",
    next: "NEXT",
    finish: "FINISH",
    
    // Difficulty selection
    selectDifficulty: "Choose Difficulty",
    selectDifficultyDesc: "Select the quiz level",
    aboutLevels: "About levels:",
    questions: "questions",
    
    // Levels
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    beginnerDesc: "Basic questions about fundamental rules",
    intermediateDesc: "Questions about specific rules and common situations",
    advancedDesc: "Complex questions about specific situations",
    
    // Quiz details
    quizDetails: "Quiz Details:",
    time: "Time:",
    minToPass: "Minimum to pass:",
    minPercentage: "Minimum percentage:",
    hits: "correct",
    
    // Result
    congratulations: "Congratulations!",
    almostThere: "Almost there!",
    youHit: "You got",
    of: "of",
    mode: "Mode",
    passedMessage: "You passed the",
    continueEvolving: "Keep evolving!",
    neededHits: "You needed",
    keepStudying: "Keep studying!",
    
    // Result buttons
    viewCorrections: "VIEW CORRECTIONS",
    retakeTest: "RETAKE TEST",
    backToHome: "BACK TO HOME",
    
    // Corrections
    corrections: "Corrections",
    backToResults: "BACK TO RESULTS",
    
    // History
    historyTitle: "Results History",
    noTestsYet: "No tests taken yet.",
    firstTest: "TAKE FIRST TEST",
    correct: "Correct:",
    approved: "Approved",
    notApproved: "Not approved",
    
    // Categories
    scoring: "SCORING",
    penalties: "PENALTIES",
    legalIllegalMoves: "LEGAL/ILLEGAL MOVES",
    rulesByBelt: "RULES BY BELT",
    refereeConduct: "REFEREE CONDUCT"
  },
  
  es: {
    // Textos generales
    appTitle: "FJU BJJ",
    appSubtitle: "CONOCE LAS REGLAS.\nDOMINA EL JUEGO.",
    startQuiz: "INICIAR SIMULACRO",
    studyRules: "ESTUDIAR REGLAS",
    historyResults: "HISTORIAL DE RESULTADOS",
    about: "Acerca de",
    terms: "Términos de Uso",
    back: "Volver",
    next: "SIGUIENTE",
    finish: "FINALIZAR",
    
    // Selección de dificultad
    selectDifficulty: "Elige la Dificultad",
    selectDifficultyDesc: "Selecciona el nivel del simulacro",
    aboutLevels: "Sobre los niveles:",
    questions: "preguntas",
    
    // Niveles
    beginner: "Principiante",
    intermediate: "Intermedio",
    advanced: "Avanzado",
    beginnerDesc: "Preguntas básicas sobre reglas fundamentales",
    intermediateDesc: "Preguntas sobre reglas específicas y situaciones comunes",
    advancedDesc: "Preguntas complejas sobre situaciones específicas",
    
    // Detalles del simulacro
    quizDetails: "Detalles del Simulacro:",
    time: "Tiempo:",
    minToPass: "Mínimo para aprobar:",
    minPercentage: "Porcentaje mínimo:",
    hits: "aciertos",
    
    // Resultado
    congratulations: "¡Felicitaciones!",
    almostThere: "¡Casi lo logras!",
    youHit: "Acertaste",
    of: "de",
    mode: "Modo",
    passedMessage: "Aprobaste el modo",
    continueEvolving: "¡Sigue evolucionando!",
    neededHits: "Necesitabas",
    keepStudying: "¡Sigue estudiando!",
    
    // Botones resultado
    viewCorrections: "VER CORRECCIONES",
    retakeTest: "REPETIR PRUEBA",
    backToHome: "VOLVER AL INICIO",
    
    // Correcciones
    corrections: "Correcciones",
    backToResults: "VOLVER A RESULTADOS",
    
    // Historial
    historyTitle: "Historial de Resultados",
    noTestsYet: "Aún no has realizado pruebas.",
    firstTest: "HACER PRIMERA PRUEBA",
    correct: "Aciertos:",
    approved: "Aprobado",
    notApproved: "No aprobado",
    
    // Categorías
    scoring: "PUNTUACIÓN",
    penalties: "PENALIDADES",
    legalIllegalMoves: "GOLPES LEGALES/ILEGALES",
    rulesByBelt: "REGLAS POR CINTURÓN",
    refereeConduct: "CONDUCTA DEL ÁRBITRO"
  }
};

// Banco completo de perguntas
const getQuestionsByLanguage = (lang) => {
  const questions = {
    pt: [
      // PONTUAÇÃO - INICIANTE
      {
        id: 1,
        question: "Quantos pontos vale uma montada?",
        options: ["2 pontos", "3 pontos", "4 pontos", "5 pontos"],
        correct: 2,
        category: "PONTUAÇÃO",
        difficulty: "iniciante"
      },
      {
        id: 2,
        question: "Quantos pontos vale uma raspagem?",
        options: ["1 ponto", "2 pontos", "3 pontos", "4 pontos"],
        correct: 1,
        category: "PONTUAÇÃO",
        difficulty: "iniciante"
      },
      {
        id: 3,
        question: "Uma queda (takedown) vale quantos pontos?",
        options: ["1 ponto", "2 pontos", "3 pontos", "4 pontos"],
        correct: 1,
        category: "PONTUAÇÃO",
        difficulty: "iniciante"
      },
      {
        id: 4,
        question: "Pegada nas costas vale quantos pontos?",
        options: ["2 pontos", "3 pontos", "4 pontos", "5 pontos"],
        correct: 2,
        category: "PONTUAÇÃO",
        difficulty: "iniciante"
      },
      
      // PONTUAÇÃO - INTERMEDIÁRIO
      {
        id: 5,
        question: "Quantos pontos são concedidos por uma passagem de guarda bem-sucedida?",
        options: ["2 pontos", "3 pontos", "4 pontos", "Nenhum ponto"],
        correct: 1,
        category: "PONTUAÇÃO",
        difficulty: "intermediario"
      },
      {
        id: 6,
        question: "Quantos pontos vale o joelho na barriga?",
        options: ["1 ponto", "2 pontos", "3 pontos", "4 pontos"],
        correct: 1,
        category: "PONTUAÇÃO",
        difficulty: "intermediario"
      },
      {
        id: 7,
        question: "Quanto tempo é necessário estabilizar uma posição para pontuar?",
        options: ["1 segundo", "2 segundos", "3 segundos", "5 segundos"],
        correct: 2,
        category: "PONTUAÇÃO",
        difficulty: "intermediario"
      },
      
      // PONTUAÇÃO - AVANÇADO
      {
        id: 8,
        question: "Se um atleta passa a guarda mas é raspado imediatamente, quantos pontos cada um recebe?",
        options: ["3-2", "3-0", "0-2", "0-0"],
        correct: 2,
        category: "PONTUAÇÃO",
        difficulty: "avancado"
      },
      {
        id: 9,
        question: "Um atleta monta, o oponente inverte mas fica preso na guarda fechada. Qual a pontuação?",
        options: ["4-0", "4-2", "4-2 + vantagem", "0-2"],
        correct: 1,
        category: "PONTUAÇÃO",
        difficulty: "avancado"
      },
      
      // PENALIDADES - INICIANTE
      {
        id: 10,
        question: "Falar durante a luta resulta em:",
        options: ["Nada", "Advertência", "Punição", "Desqualificação"],
        correct: 2,
        category: "PENALIDADES",
        difficulty: "iniciante"
      },
      {
        id: 11,
        question: "Sair da área de luta resulta em:",
        options: ["Advertência", "Punição", "Desqualificação", "Nada"],
        correct: 1,
        category: "PENALIDADES",
        difficulty: "iniciante"
      },
      
      // PENALIDADES - INTERMEDIÁRIO
      {
        id: 12,
        question: "Qual é a penalidade para puxar a guarda sem contato?",
        options: ["Advertência", "Punição", "Desqualificação", "Nenhuma penalidade"],
        correct: 1,
        category: "PENALIDADES",
        difficulty: "intermediario"
      },
      {
        id: 13,
        question: "Colocar os dedos dentro da manga do oponente resulta em:",
        options: ["Advertência", "Punição", "Desqualificação", "É permitido"],
        correct: 1,
        category: "PENALIDADES",
        difficulty: "intermediario"
      },
      {
        id: 14,
        question: "Quantas punições resultam em desqualificação?",
        options: ["2", "3", "4", "5"],
        correct: 2,
        category: "PENALIDADES",
        difficulty: "intermediario"
      },
      
      // PENALIDADES - AVANÇADO
      {
        id: 15,
        question: "O que acontece se um atleta foge da área de luta 3 vezes?",
        options: ["Advertência", "Punição", "Desqualificação", "Perda de pontos"],
        correct: 2,
        category: "PENALIDADES",
        difficulty: "avancado"
      },
      {
        id: 16,
        question: "Segurar na barra do kimono sem atacar por quanto tempo resulta em punição?",
        options: ["10 segundos", "15 segundos", "20 segundos", "30 segundos"],
        correct: 2,
        category: "PENALIDADES",
        difficulty: "avancado"
      },
      
      // GOLPES LEGAIS/ILEGAIS - INICIANTE
      {
        id: 17,
        question: "Estrangulamentos são permitidos para faixas brancas?",
        options: ["Sim", "Não", "Apenas alguns", "Depende da idade"],
        correct: 0,
        category: "GOLPES LEGAIS/ILEGAIS",
        difficulty: "iniciante"
      },
      {
        id: 18,
        question: "Chaves de braço são permitidas para todas as faixas?",
        options: ["Sim", "Não", "Apenas adultos", "Apenas faixas coloridas"],
        correct: 0,
        category: "GOLPES LEGAIS/ILEGAIS",
        difficulty: "iniciante"
      },
      
      // GOLPES LEGAIS/ILEGAIS - INTERMEDIÁRIO
      {
        id: 19,
        question: "Chave de tornozelo é permitida a partir de qual faixa?",
        options: ["Azul", "Roxa", "Marrom", "Preta"],
        correct: 2,
        category: "GOLPES LEGAIS/ILEGAIS",
        difficulty: "intermediario"
      },
      
      // GOLPES LEGAIS/ILEGAIS - AVANÇADO
      {
        id: 20,
        question: "É permitido fazer chave de calcanhar na faixa preta?",
        options: ["Sim", "Não", "Apenas no absoluto", "Depende do campeonato"],
        correct: 3,
        category: "GOLPES LEGAIS/ILEGAIS",
        difficulty: "avancado"
      },
      
      // REGRAS POR FAIXA - INICIANTE
      {
        id: 21,
        question: "Quanto tempo dura uma luta na faixa branca adulto?",
        options: ["4 minutos", "5 minutos", "6 minutos", "7 minutos"],
        correct: 1,
        category: "REGRAS POR FAIXA",
        difficulty: "iniciante"
      },
      
      // REGRAS POR FAIXA - INTERMEDIÁRIO
      {
        id: 22,
        question: "Quanto tempo dura uma luta na faixa azul adulto?",
        options: ["5 minutos", "6 minutos", "7 minutos", "8 minutos"],
        correct: 1,
        category: "REGRAS POR FAIXA",
        difficulty: "intermediario"
      },
      
      // REGRAS POR FAIXA - AVANÇADO
      {
        id: 23,
        question: "Quanto tempo dura uma luta na faixa preta adulto?",
        options: ["5 minutos", "8 minutos", "10 minutos", "12 minutos"],
        correct: 2,
        category: "REGRAS POR FAIXA",
        difficulty: "avancado"
      },
      
      // CONDUTA DO ÁRBITRO - INICIANTE
      {
        id: 24,
        question: "O árbitro deve parar a luta quando o atleta:",
        options: ["Grita", "Bate", "Reclama", "Cansa"],
        correct: 1,
        category: "CONDUTA DO ÁRBITRO",
        difficulty: "iniciante"
      },
      
      // CONDUTA DO ÁRBITRO - INTERMEDIÁRIO
      {
        id: 25,
        question: "Quando o árbitro deve verificar o kimono?",
        options: ["Antes da luta", "Durante a luta", "Após a luta", "Antes e durante"],
        correct: 3,
        category: "CONDUTA DO ÁRBITRO",
        difficulty: "intermediario"
      }
    ],
    
    en: [
      // SCORING - BEGINNER
      {
        id: 1,
        question: "How many points is a mount worth?",
        options: ["2 points", "3 points", "4 points", "5 points"],
        correct: 2,
        category: "SCORING",
        difficulty: "iniciante"
      },
      {
        id: 2,
        question: "How many points is a sweep worth?",
        options: ["1 point", "2 points", "3 points", "4 points"],
        correct: 1,
        category: "SCORING",
        difficulty: "iniciante"
      },
      {
        id: 3,
        question: "How many points is a takedown worth?",
        options: ["1 point", "2 points", "3 points", "4 points"],
        correct: 1,
        category: "SCORING",
        difficulty: "iniciante"
      },
      {
        id: 4,
        question: "How many points is back control worth?",
        options: ["2 points", "3 points", "4 points", "5 points"],
        correct: 2,
        category: "SCORING",
        difficulty: "iniciante"
      },
      
      // SCORING - INTERMEDIATE
      {
        id: 5,
        question: "How many points are awarded for a successful guard pass?",
        options: ["2 points", "3 points", "4 points", "No points"],
        correct: 1,
        category: "SCORING",
        difficulty: "intermediario"
      },
      {
        id: 6,
        question: "How many points is knee on belly worth?",
        options: ["1 point", "2 points", "3 points", "4 points"],
        correct: 1,
        category: "SCORING",
        difficulty: "intermediario"
      },
      {
        id: 7,
        question: "How long must a position be held to score points?",
        options: ["1 second", "2 seconds", "3 seconds", "5 seconds"],
        correct: 2,
        category: "SCORING",
        difficulty: "intermediario"
      },
      
      // SCORING - ADVANCED
      {
        id: 8,
        question: "If an athlete passes guard but is immediately swept, what's the score?",
        options: ["3-2", "3-0", "0-2", "0-0"],
        correct: 2,
        category: "SCORING",
        difficulty: "avancado"
      },
      {
        id: 9,
        question: "An athlete mounts, opponent reverses but ends in closed guard. What's the score?",
        options: ["4-0", "4-2", "4-2 + advantage", "0-2"],
        correct: 1,
        category: "SCORING",
        difficulty: "avancado"
      },
      
      // PENALTIES - BEGINNER
      {
        id: 10,
        question: "Talking during the match results in:",
        options: ["Nothing", "Warning", "Penalty", "Disqualification"],
        correct: 2,
        category: "PENALTIES",
        difficulty: "iniciante"
      },
      {
        id: 11,
        question: "Leaving the match area results in:",
        options: ["Warning", "Penalty", "Disqualification", "Nothing"],
        correct: 1,
        category: "PENALTIES",
        difficulty: "iniciante"
      },
      
      // PENALTIES - INTERMEDIATE
      {
        id: 12,
        question: "What's the penalty for pulling guard without contact?",
        options: ["Warning", "Penalty", "Disqualification", "No penalty"],
        correct: 1,
        category: "PENALTIES",
        difficulty: "intermediario"
      },
      {
        id: 13,
        question: "Putting fingers inside the opponent's sleeve results in:",
        options: ["Warning", "Penalty", "Disqualification", "It's allowed"],
        correct: 1,
        category: "PENALTIES",
        difficulty: "intermediario"
      },
      {
        id: 14,
        question: "How many penalties result in disqualification?",
        options: ["2", "3", "4", "5"],
        correct: 2,
        category: "PENALTIES",
        difficulty: "intermediario"
      },
      
      // PENALTIES - ADVANCED
      {
        id: 15,
        question: "What happens if an athlete flees the match area 3 times?",
        options: ["Warning", "Penalty", "Disqualification", "Point deduction"],
        correct: 2,
        category: "PENALTIES",
        difficulty: "avancado"
      },
      {
        id: 16,
        question: "Holding the gi without attacking for how long results in a penalty?",
        options: ["10 seconds", "15 seconds", "20 seconds", "30 seconds"],
        correct: 2,
        category: "PENALTIES",
        difficulty: "avancado"
      },
      
      // LEGAL/ILLEGAL MOVES - BEGINNER
      {
        id: 17,
        question: "Are chokes allowed for white belts?",
        options: ["Yes", "No", "Only some", "Depends on age"],
        correct: 0,
        category: "LEGAL/ILLEGAL MOVES",
        difficulty: "iniciante"
      },
      {
        id: 18,
        question: "Are arm locks allowed for all belts?",
        options: ["Yes", "No", "Adults only", "Colored belts only"],
        correct: 0,
        category: "LEGAL/ILLEGAL MOVES",
        difficulty: "iniciante"
      },
      
      // LEGAL/ILLEGAL MOVES - INTERMEDIATE
      {
        id: 19,
        question: "Ankle locks are allowed from which belt?",
        options: ["Blue", "Purple", "Brown", "Black"],
        correct: 2,
        category: "LEGAL/ILLEGAL MOVES",
        difficulty: "intermediario"
      },
      
      // LEGAL/ILLEGAL MOVES - ADVANCED
      {
        id: 20,
        question: "Is heel hook allowed for black belts?",
        options: ["Yes", "No", "Only in absolute", "Depends on championship"],
        correct: 3,
        category: "LEGAL/ILLEGAL MOVES",
        difficulty: "avancado"
      },
      
      // RULES BY BELT - BEGINNER
      {
        id: 21,
        question: "How long is an adult white belt match?",
        options: ["4 minutes", "5 minutes", "6 minutes", "7 minutes"],
        correct: 1,
        category: "RULES BY BELT",
        difficulty: "iniciante"
      },
      
      // RULES BY BELT - INTERMEDIATE
      {
        id: 22,
        question: "How long is an adult blue belt match?",
        options: ["5 minutes", "6 minutes", "7 minutes", "8 minutes"],
        correct: 1,
        category: "RULES BY BELT",
        difficulty: "intermediario"
      },
      
      // RULES BY BELT - ADVANCED
      {
        id: 23,
        question: "How long is an adult black belt match?",
        options: ["5 minutes", "8 minutes", "10 minutes", "12 minutes"],
        correct: 2,
        category: "RULES BY BELT",
        difficulty: "avancado"
      },
      
      // REFEREE CONDUCT - BEGINNER
      {
        id: 24,
        question: "The referee must stop the match when the athlete:",
        options: ["Yells", "Taps", "Complains", "Gets tired"],
        correct: 1,
        category: "REFEREE CONDUCT",
        difficulty: "iniciante"
      },
      
      // REFEREE CONDUCT - INTERMEDIATE
      {
        id: 25,
        question: "When should the referee check the gi?",
        options: ["Before the match", "During the match", "After the match", "Before and during"],
        correct: 3,
        category: "REFEREE CONDUCT",
        difficulty: "intermediario"
      }
    ],
    
    es: [
      // PUNTUACIÓN - PRINCIPIANTE
      {
        id: 1,
        question: "¿Cuántos puntos vale una montada?",
        options: ["2 puntos", "3 puntos", "4 puntos", "5 puntos"],
        correct: 2,
        category: "PUNTUACIÓN",
        difficulty: "iniciante"
      },
      {
        id: 2,
        question: "¿Cuántos puntos vale una raspada?",
        options: ["1 punto", "2 puntos", "3 puntos", "4 puntos"],
        correct: 1,
        category: "PUNTUACIÓN",
        difficulty: "iniciante"
      },
      {
        id: 3,
        question: "¿Cuántos puntos vale un derribo?",
        options: ["1 punto", "2 puntos", "3 puntos", "4 puntos"],
        correct: 1,
        category: "PUNTUACIÓN",
        difficulty: "iniciante"
      },
      {
        id: 4,
        question: "¿Cuántos puntos vale el control de espalda?",
        options: ["2 puntos", "3 puntos", "4 puntos", "5 puntos"],
        correct: 2,
        category: "PUNTUACIÓN",
        difficulty: "iniciante"
      },
      
      // PUNTUACIÓN - INTERMEDIO
      {
        id: 5,
        question: "¿Cuántos puntos se otorgan por un pasaje de guardia exitoso?",
        options: ["2 puntos", "3 puntos", "4 puntos", "Ningún punto"],
        correct: 1,
        category: "PUNTUACIÓN",
        difficulty: "intermediario"
      },
      {
        id: 6,
        question: "¿Cuántos puntos vale la rodilla en el vientre?",
        options: ["1 punto", "2 puntos", "3 puntos", "4 puntos"],
        correct: 1,
        category: "PUNTUACIÓN",
        difficulty: "intermediario"
      },
      {
        id: 7,
        question: "¿Cuánto tiempo se debe mantener una posición para puntuar?",
        options: ["1 segundo", "2 segundos", "3 segundos", "5 segundos"],
        correct: 2,
        category: "PUNTUACIÓN",
        difficulty: "intermediario"
      },
      
      // PUNTUACIÓN - AVANZADO
      {
        id: 8,
        question: "Si un atleta pasa la guardia pero es raspado inmediatamente, ¿cuál es el puntaje?",
        options: ["3-2", "3-0", "0-2", "0-0"],
        correct: 2,
        category: "PUNTUACIÓN",
        difficulty: "avancado"
      },
      {
        id: 9,
        question: "Un atleta monta, el oponente invierte pero queda en guardia cerrada. ¿Cuál es el puntaje?",
        options: ["4-0", "4-2", "4-2 + ventaja", "0-2"],
        correct: 1,
        category: "PUNTUACIÓN",
        difficulty: "avancado"
      },
      
      // PENALIDADES - PRINCIPIANTE
      {
        id: 10,
        question: "Hablar durante la pelea resulta en:",
        options: ["Nada", "Advertencia", "Penalización", "Descalificación"],
        correct: 2,
        category: "PENALIDADES",
        difficulty: "iniciante"
      },
      {
        id: 11,
        question: "Salir del área de combate resulta en:",
        options: ["Advertencia", "Penalización", "Descalificación", "Nada"],
        correct: 1,
        category: "PENALIDADES",
        difficulty: "iniciante"
      },
      
      // PENALIDADES - INTERMEDIO
      {
        id: 12,
        question: "¿Cuál es la penalidad por tirar guardia sin contacto?",
        options: ["Advertencia", "Penalización", "Descalificación", "Sin penalidad"],
        correct: 1,
        category: "PENALIDADES",
        difficulty: "intermediario"
      },
      {
        id: 13,
        question: "Poner los dedos dentro de la manga del oponente resulta en:",
        options: ["Advertencia", "Penalización", "Descalificación", "Está permitido"],
        correct: 1,
        category: "PENALIDADES",
        difficulty: "intermediario"
      },
      {
        id: 14,
        question: "¿Cuántas penalizaciones resultan en descalificación?",
        options: ["2", "3", "4", "5"],
        correct: 2,
        category: "PENALIDADES",
        difficulty: "intermediario"
      },
      
      // PENALIDADES - AVANZADO
      {
        id: 15,
        question: "¿Qué pasa si un atleta huye del área de combate 3 veces?",
        options: ["Advertencia", "Penalización", "Descalificación", "Pérdida de puntos"],
        correct: 2,
        category: "PENALIDADES",
        difficulty: "avancado"
      },
      {
        id: 16,
        question: "¿Agarrar el gi sin atacar por cuánto tiempo resulta en penalización?",
        options: ["10 segundos", "15 segundos", "20 segundos", "30 segundos"],
        correct: 2,
        category: "PENALIDADES",
        difficulty: "avancado"
      },
      
      // GOLPES LEGALES/ILEGALES - PRINCIPIANTE
      {
        id: 17,
        question: "¿Se permiten estrangulaciones para cinturones blancos?",
        options: ["Sí", "No", "Solo algunos", "Depende de la edad"],
        correct: 0,
        category: "GOLPES LEGALES/ILEGALES",
        difficulty: "iniciante"
      },
      {
        id: 18,
        question: "¿Se permiten llaves de brazo para todos los cinturones?",
        options: ["Sí", "No", "Solo adultos", "Solo cinturones de color"],
        correct: 0,
        category: "GOLPES LEGALES/ILEGALES",
        difficulty: "iniciante"
      },
      
      // GOLPES LEGALES/ILEGALES - INTERMEDIO
      {
        id: 19,
        question: "¿Las llaves de tobillo se permiten desde qué cinturón?",
        options: ["Azul", "Púrpura", "Marrón", "Negro"],
        correct: 2,
        category: "GOLPES LEGALES/ILEGALES",
        difficulty: "intermediario"
      },
      
      // GOLPES LEGALES/ILEGALES - AVANZADO
      {
        id: 20,
        question: "¿Se permite la llave de talón para cinturones negros?",
        options: ["Sí", "No", "Solo en absoluto", "Depende del campeonato"],
        correct: 3,
        category: "GOLPES LEGALES/ILEGALES",
        difficulty: "avancado"
      },
      
      // REGLAS POR CINTURÓN - PRINCIPIANTE
      {
        id: 21,
        question: "¿Cuánto dura una pelea de cinturón blanco adulto?",
        options: ["4 minutos", "5 minutos", "6 minutos", "7 minutos"],
        correct: 1,
        category: "REGLAS POR CINTURÓN",
        difficulty: "iniciante"
      },
      
      // REGLAS POR CINTURÓN - INTERMEDIO
      {
        id: 22,
        question: "¿Cuánto dura una pelea de cinturón azul adulto?",
        options: ["5 minutos", "6 minutos", "7 minutos", "8 minutos"],
        correct: 1,
        category: "REGLAS POR CINTURÓN",
        difficulty: "intermediario"
      },
      
      // REGLAS POR CINTURÓN - AVANZADO
      {
        id: 23,
        question: "¿Cuánto dura una pelea de cinturón negro adulto?",
        options: ["5 minutos", "8 minutos", "10 minutos", "12 minutos"],
        correct: 2,
        category: "REGLAS POR CINTURÓN",
        difficulty: "avancado"
      },
      
      // CONDUCTA DEL ÁRBITRO - PRINCIPIANTE
      {
        id: 24,
        question: "El árbitro debe detener la pelea cuando el atleta:",
        options: ["Grita", "Golpea (tap)", "Se queja", "Se cansa"],
        correct: 1,
        category: "CONDUCTA DEL ÁRBITRO",
        difficulty: "iniciante"
      },
      
      // CONDUCTA DEL ÁRBITRO - INTERMEDIO
      {
        id: 25,
        question: "¿Cuándo debe el árbitro revisar el gi?",
        options: ["Antes de la pelea", "Durante la pelea", "Después de la pelea", "Antes y durante"],
        correct: 3,
        category: "CONDUCTA DEL ÁRBITRO",
        difficulty: "intermediario"
      }
    ]
  };
  
  return questions[lang] || questions.pt;
};

// Componente da Logo FJU
const FJULogo = ({ size = 'normal' }) => {
  const dimensions = size === 'small' ? 'w-16 h-16' : 'w-24 h-24';
  
  return (
    <div className={`${dimensions} relative`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="98" fill="#1e3a8a" stroke="#000" strokeWidth="2"/>
        <circle cx="100" cy="100" r="85" fill="white" />
        <path id="topText" d="M 100,100 m -75,0 a 75,75 0 0,1 150,0" fill="none" />
        <text className="text-xs font-bold fill-slate-900">
          <textPath href="#topText" startOffset="50%" textAnchor="middle">
            BRAZILIAN JIU JITSU
          </textPath>
        </text>
        <path id="bottomText" d="M 100,100 m -75,0 a 75,75 0 0,0 150,0" fill="none" />
        <text className="text-xs font-bold fill-slate-900">
          <textPath href="#bottomText" startOffset="50%" textAnchor="middle">
            UNITED STATES OF AMERICA
          </textPath>
        </text>
        <circle cx="100" cy="100" r="55" fill="#000" />
        <circle cx="100" cy="100" r="45" fill="#dc2626" />
        <circle cx="100" cy="100" r="35" fill="white" />
        <text x="100" y="110" textAnchor="middle" className="text-3xl font-bold fill-slate-900">
          FJU
        </text>
        <path d="M 75 100 Q 85 95 95 100" fill="none" stroke="#dc2626" strokeWidth="3" strokeLinecap="round"/>
        <rect x="40" y="85" width="8" height="12" fill="#b91c1c" />
        <rect x="40" y="85" width="8" height="6" fill="#1e40af" />
        <rect x="152" y="85" width="8" height="12" fill="#b91c1c" />
        <rect x="152" y="85" width="8" height="6" fill="#1e40af" />
      </svg>
    </div>
  );
};

// Componente de seleção de idioma
const LanguageSelector = ({ currentLang, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: 'pt', flag: '🇧🇷', name: 'Português' },
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'es', flag: '🇪🇸', name: 'Español' }
  ];
  
  const currentLanguage = languages.find(l => l.code === currentLang);
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span>{currentLanguage.flag}</span>
        <ChevronLeft className={`w-4 h-4 transition-transform ${isOpen ? '-rotate-90' : 'rotate-0'}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-gray-700 rounded-lg shadow-lg overflow-hidden z-50">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-600 transition-colors ${
                currentLang === lang.code ? 'bg-gray-600' : ''
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Configurações por dificuldade
const difficultySettings = {
  iniciante: {
    key: 'beginner',
    icon: Trophy,
    color: "bg-green-600",
    hoverColor: "hover:bg-green-700",
    time: 300,
    questions: 8,
    minCorrect: 5
  },
  intermediario: {
    key: 'intermediate',
    icon: Target,
    color: "bg-yellow-600",
    hoverColor: "hover:bg-yellow-700",
    time: 270,
    questions: 10,
    minCorrect: 6
  },
  avancado: {
    key: 'advanced',
    icon: Zap,
    color: "bg-red-600",
    hoverColor: "hover:bg-red-700",
    time: 240,
    questions: 12,
    minCorrect: 8
  }
};

// Dados das regras para estudo
const rulesData = {
  pt: {
    "PONTUAÇÃO": [
      { rule: "Montada", points: "4 pontos", description: "Controle por cima com os dois joelhos no chão" },
      { rule: "Pegada nas costas", points: "4 pontos", description: "Controle das costas com ganchos" },
      { rule: "Passagem de guarda", points: "3 pontos", description: "Passar a guarda e estabilizar por 3 segundos" },
      { rule: "Joelho na barriga", points: "2 pontos", description: "Joelho na barriga com controle" },
      { rule: "Raspagem", points: "2 pontos", description: "Inverter posição saindo de baixo" },
      { rule: "Queda", points: "2 pontos", description: "Derrubar o oponente e ficar por cima" }
    ],
    "PENALIDADES": [
      { rule: "Falta de combatividade", penalty: "Punição", description: "Não buscar a luta ativamente" },
      { rule: "Puxar guarda sem contato", penalty: "Punição", description: "Sentar sem pegar no oponente" },
      { rule: "Sair da área", penalty: "Punição", description: "Fugir da área de luta" },
      { rule: "Falar durante a luta", penalty: "Punição", description: "Comunicação verbal não permitida" },
      { rule: "Pegar dentro do kimono", penalty: "Punição", description: "Colocar dedos dentro da manga ou gola" }
    ],
    "GOLPES LEGAIS/ILEGAIS": [
      { rule: "Chaves de braço", status: "Legal", faixa: "Todas as faixas" },
      { rule: "Estrangulamentos", status: "Legal", faixa: "Todas as faixas" },
      { rule: "Chave de pé reta", status: "Legal", faixa: "Marrom e Preta" },
      { rule: "Chave de calcanhar", status: "Legal", faixa: "Preta (alguns campeonatos)" },
      { rule: "Mata-leão com ezequiel", status: "Ilegal", faixa: "Todas as faixas" },
      { rule: "Dedos nos olhos", status: "Ilegal", faixa: "Todas as faixas" }
    ],
    "REGRAS POR FAIXA": [
      { faixa: "Branca", tempo: "5 min", golpes: "Básicos apenas" },
      { faixa: "Azul", tempo: "6 min", golpes: "Básicos + algumas chaves de pé" },
      { faixa: "Roxa", tempo: "7 min", golpes: "Mais chaves de pé permitidas" },
      { faixa: "Marrom", tempo: "8 min", golpes: "Quase todos os golpes" },
      { faixa: "Preta", tempo: "10 min", golpes: "Todos os golpes (varia por campeonato)" }
    ],
    "CONDUTA DO ÁRBITRO": [
      { rule: "Parar a luta", when: "Batida, lesão grave, desmaio" },
      { rule: "Aplicar penalidades", when: "Infrações às regras" },
      { rule: "Contar pontos", when: "Posições estabilizadas por 3 segundos" },
      { rule: "Verificar kimono", when: "Antes da luta e quando necessário" },
      { rule: "Declarar vencedor", when: "Fim do tempo ou finalização" }
    ]
  },
  en: {
    "SCORING": [
      { rule: "Mount", points: "4 points", description: "Top control with both knees on the ground" },
      { rule: "Back control", points: "4 points", description: "Back control with hooks" },
      { rule: "Guard pass", points: "3 points", description: "Pass the guard and stabilize for 3 seconds" },
      { rule: "Knee on belly", points: "2 points", description: "Knee on belly with control" },
      { rule: "Sweep", points: "2 points", description: "Reverse position from bottom" },
      { rule: "Takedown", points: "2 points", description: "Take opponent down and stay on top" }
    ],
    "PENALTIES": [
      { rule: "Lack of combativeness", penalty: "Penalty", description: "Not actively seeking the fight" },
      { rule: "Pull guard without contact", penalty: "Penalty", description: "Sit without gripping the opponent" },
      { rule: "Leave the area", penalty: "Penalty", description: "Flee the fighting area" },
      { rule: "Talking during fight", penalty: "Penalty", description: "Verbal communication not allowed" },
      { rule: "Grabbing inside the gi", penalty: "Penalty", description: "Put fingers inside sleeve or collar" }
    ],
    "LEGAL/ILLEGAL MOVES": [
      { rule: "Arm locks", status: "Legal", faixa: "All belts" },
      { rule: "Chokes", status: "Legal", faixa: "All belts" },
      { rule: "Straight foot lock", status: "Legal", faixa: "Brown and Black" },
      { rule: "Heel hook", status: "Legal", faixa: "Black (some championships)" },
      { rule: "Spine crank", status: "Illegal", faixa: "All belts" },
      { rule: "Eye gouging", status: "Illegal", faixa: "All belts" }
    ],
    "RULES BY BELT": [
      { faixa: "White", tempo: "5 min", golpes: "Basic only" },
      { faixa: "Blue", tempo: "6 min", golpes: "Basic + some leg locks" },
      { faixa: "Purple", tempo: "7 min", golpes: "More leg locks allowed" },
      { faixa: "Brown", tempo: "8 min", golpes: "Almost all techniques" },
      { faixa: "Black", tempo: "10 min", golpes: "All techniques (varies by championship)" }
    ],
    "REFEREE CONDUCT": [
      { rule: "Stop the match", when: "Tap, serious injury, unconsciousness" },
      { rule: "Apply penalties", when: "Rules infractions" },
      { rule: "Count points", when: "Positions stabilized for 3 seconds" },
      { rule: "Check gi", when: "Before match and when necessary" },
      { rule: "Declare winner", when: "Time ends or submission" }
    ]
  },
  es: {
    "PUNTUACIÓN": [
      { rule: "Montada", points: "4 puntos", description: "Control superior con ambas rodillas en el suelo" },
      { rule: "Control de espalda", points: "4 puntos", description: "Control de espalda con ganchos" },
      { rule: "Pasaje de guardia", points: "3 puntos", description: "Pasar la guardia y estabilizar por 3 segundos" },
      { rule: "Rodilla en el vientre", points: "2 puntos", description: "Rodilla en el vientre con control" },
      { rule: "Raspada", points: "2 puntos", description: "Invertir posición desde abajo" },
      { rule: "Derribo", points: "2 puntos", description: "Derribar al oponente y quedar arriba" }
    ],
    "PENALIDADES": [
      { rule: "Falta de combatividad", penalty: "Penalización", description: "No buscar activamente la lucha" },
      { rule: "Tirar guardia sin contacto", penalty: "Penalización", description: "Sentarse sin agarrar al oponente" },
      { rule: "Salir del área", penalty: "Penalización", description: "Huir del área de combate" },
      { rule: "Hablar durante la pelea", penalty: "Penalización", description: "Comunicación verbal no permitida" },
      { rule: "Agarrar dentro del gi", penalty: "Penalización", description: "Meter dedos dentro de manga o cuello" }
    ],
    "GOLPES LEGALES/ILEGALES": [
      { rule: "Llaves de brazo", status: "Legal", faixa: "Todos los cinturones" },
      { rule: "Estrangulaciones", status: "Legal", faixa: "Todos los cinturones" },
      { rule: "Llave de pie recta", status: "Legal", faixa: "Marrón y Negro" },
      { rule: "Llave de talón", status: "Legal", faixa: "Negro (algunos campeonatos)" },
      { rule: "Torsión de columna", status: "Ilegal", faixa: "Todos los cinturones" },
      { rule: "Dedos en los ojos", status: "Ilegal", faixa: "Todos los cinturones" }
    ],
    "REGLAS POR CINTURÓN": [
      { faixa: "Blanco", tempo: "5 min", golpes: "Solo básicos" },
      { faixa: "Azul", tempo: "6 min", golpes: "Básicos + algunas llaves de pie" },
      { faixa: "Púrpura", tempo: "7 min", golpes: "Más llaves de pie permitidas" },
      { faixa: "Marrón", tempo: "8 min", golpes: "Casi todas las técnicas" },
      { faixa: "Negro", tempo: "10 min", golpes: "Todas las técnicas (varía por campeonato)" }
    ],
    "CONDUCTA DEL ÁRBITRO": [
      { rule: "Detener la pelea", when: "Golpeo, lesión grave, inconsciencia" },
      { rule: "Aplicar penalidades", when: "Infracciones a las reglas" },
      { rule: "Contar puntos", when: "Posiciones estabilizadas por 3 segundos" },
      { rule: "Revisar gi", when: "Antes de la pelea y cuando sea necesario" },
      { rule: "Declarar ganador", when: "Fin del tiempo o finalización" }
    ]
  }
};

// Função para embaralhar array
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Função para embaralhar as opções de uma pergunta
const shuffleQuestionOptions = (question) => {
  const correctAnswer = question.options[question.correct];
  const shuffledOptions = shuffleArray([...question.options]);
  const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
  
  return {
    ...question,
    options: shuffledOptions,
    correct: newCorrectIndex
  };
};

// Componente principal
function App() {
  const [language, setLanguage] = useState('pt');
  const [screen, setScreen] = useState('home');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(255);
  const [timerActive, setTimerActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [history, setHistory] = useState([]);
  const [currentQuizQuestions, setCurrentQuizQuestions] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const t = translations[language];

  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && timerActive) {
      finishQuiz();
    }
  }, [timeLeft, timerActive]);

  const prepareQuizQuestions = (difficulty) => {
    const settings = difficultySettings[difficulty];
    const questions = getQuestionsByLanguage(language);
    
    const difficultyQuestions = questions.filter(q => q.difficulty === difficulty);
    let availableQuestions = [...difficultyQuestions];
    
    if (availableQuestions.length < settings.questions) {
      const allQuestions = shuffleArray(questions);
      availableQuestions = allQuestions.slice(0, settings.questions);
    }
    
    const shuffledQuestions = shuffleArray(availableQuestions);
    const selectedQuestions = shuffledQuestions.slice(0, settings.questions);
    const questionsWithShuffledOptions = selectedQuestions.map(shuffleQuestionOptions);
    
    return questionsWithShuffledOptions;
  };

  const selectDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setScreen('difficulty-confirm');
  };

  const startQuiz = () => {
    const settings = difficultySettings[selectedDifficulty];
    const newQuestions = prepareQuizQuestions(selectedDifficulty);
    
    setCurrentQuizQuestions(newQuestions);
    setScreen('quiz');
    setCurrentQuestion(0);
    setAnswers([]);
    setTimeLeft(settings.time);
    setTimerActive(true);
    setSelectedAnswer(null);
  };

  const selectAnswer = (index) => {
    setSelectedAnswer(index);
  };

  const nextQuestion = () => {
    if (selectedAnswer !== null) {
      setAnswers([...answers, { 
        questionId: currentQuizQuestions[currentQuestion].id,
        selected: selectedAnswer,
        correct: selectedAnswer === currentQuizQuestions[currentQuestion].correct
      }]);
      
      if (currentQuestion < currentQuizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        finishQuiz();
      }
    }
  };

  const finishQuiz = () => {
    setTimerActive(false);
    const correct = answers.filter(a => a.correct).length;
    const settings = difficultySettings[selectedDifficulty];
    
    const result = {
      date: new Date().toLocaleDateString(language === 'pt' ? 'pt-BR' : language === 'en' ? 'en-US' : 'es-ES'),
      time: new Date().toLocaleTimeString(language === 'pt' ? 'pt-BR' : language === 'en' ? 'en-US' : 'es-ES', { hour: '2-digit', minute: '2-digit' }),
      correct: correct,
      total: currentQuizQuestions.length,
      percentage: Math.round((correct / currentQuizQuestions.length) * 100),
      difficulty: t[settings.key],
      passed: correct >= settings.minCorrect
    };
    setHistory([...history, result]);
    setScreen('result');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getCorrectAnswers = () => {
    const correctCount = answers.filter(a => a.correct).length;
    return correctCount;
  };

  // Telas do aplicativo
  if (screen === 'home') {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
        <div className="absolute top-4 right-4">
          <LanguageSelector currentLang={language} onLanguageChange={setLanguage} />
        </div>
        
        <div className="w-full max-w-sm">
          <div className="flex flex-col items-center mb-8">
            <FJULogo />
            <h1 className="text-4xl font-bold mb-2 mt-4">{t.appTitle}</h1>
            <p className="text-center text-gray-300 whitespace-pre-line">{t.appSubtitle}</p>
          </div>
          
          <div className="space-y-3">
            <button
              onClick={() => setScreen('select-difficulty')}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors"
            >
              {t.startQuiz}
            </button>
            
            <button
              onClick={() => setScreen('study')}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-6 rounded-lg transition-colors"
            >
              {t.studyRules}
            </button>
            
            <button
              onClick={() => setScreen('history')}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Clock className="w-5 h-5" />
              {t.historyResults}
            </button>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-400">
            <a href="#" className="hover:text-white">{t.about}</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white">{t.terms}</a>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'select-difficulty') {
    return (
      <div className="min-h-screen bg-slate-900 text-white p-4">
        <div className="absolute top-4 right-4">
          <LanguageSelector currentLang={language} onLanguageChange={setLanguage} />
        </div>
        
        <div className="w-full max-w-sm mx-auto pt-16">
          <button
            onClick={() => setScreen('home')}
            className="mb-6 text-gray-300 hover:text-white flex items-center gap-2"
          >
            <ChevronLeft className="w-6 h-6" />
            {t.back}
          </button>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">{t.selectDifficulty}</h1>
            <p className="text-gray-300">{t.selectDifficultyDesc}</p>
          </div>

          <div className="space-y-4">
            {Object.entries(difficultySettings).map(([key, settings]) => {
              const Icon = settings.icon;
              return (
                <button
                  key={key}
                  onClick={() => selectDifficulty(key)}
                  className={`w-full ${settings.color} ${settings.hoverColor} text-white p-4 rounded-lg transition-all transform hover:scale-105`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="w-8 h-8" />
                      <div className="text-left">
                        <h3 className="font-bold text-lg">{t[settings.key]}</h3>
                        <p className="text-sm opacity-90">{settings.questions} {t.questions} • {formatTime(settings.time)}</p>
                      </div>
                    </div>
                    <ChevronLeft className="w-6 h-6 rotate-180" />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 bg-gray-800 p-4 rounded-lg">
            <h4 className="font-bold mb-2">{t.aboutLevels}</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p><span className="text-green-400">{t.beginner}:</span> {t.beginnerDesc}</p>
              <p><span className="text-yellow-400">{t.intermediate}:</span> {t.intermediateDesc}</p>
              <p><span className="text-red-400">{t.advanced}:</span> {t.advancedDesc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'difficulty-confirm') {
    const settings = difficultySettings[selectedDifficulty];
    const Icon = settings.icon;

    return (
      <div className="min-h-screen bg-slate-900 text-white p-4">
        <div className="absolute top-4 right-4">
          <LanguageSelector currentLang={language} onLanguageChange={setLanguage} />
        </div>
        
        <div className="w-full max-w-sm mx-auto pt-16">
          <button
            onClick={() => setScreen('select-difficulty')}
            className="mb-6 text-gray-300 hover:text-white flex items-center gap-2"
          >
            <ChevronLeft className="w-6 h-6" />
            {t.back}
          </button>

          <div className="text-center mb-8">
            <div className={`w-24 h-24 ${settings.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <Icon className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2">{t.mode} {t[settings.key]}</h1>
            <p className="text-gray-300">{t[settings.key + 'Desc']}</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg mb-4">{t.quizDetails}</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">{t.questions}:</span>
                <span className="font-bold">{settings.questions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">{t.time}</span>
                <span className="font-bold">{formatTime(settings.time)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">{t.minToPass}</span>
                <span className="font-bold">{settings.minCorrect} {t.hits}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">{t.minPercentage}</span>
                <span className="font-bold">{Math.round((settings.minCorrect / settings.questions) * 100)}%</span>
              </div>
            </div>
          </div>

          <button
            onClick={startQuiz}
            className={`w-full ${settings.color} ${settings.hoverColor} text-white font-bold py-4 px-6 rounded-lg transition-colors`}
          >
            {t.startQuiz}
          </button>
        </div>
      </div>
    );
  }

  if (screen === 'quiz') {
    const question = currentQuizQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / currentQuizQuestions.length) * 100;
    const settings = difficultySettings[selectedDifficulty];

    return (
      <div className="min-h-screen bg-slate-900 text-white p-4">
        <div className="absolute top-4 right-4">
          <FJULogo size="small" />
        </div>
        
        <div className="w-full max-w-sm mx-auto pt-20">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-bold">{currentQuestion + 1} / {currentQuizQuestions.length}</span>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded ${settings.color}`}>
                  {t[settings.key]}
                </span>
                <span className="text-lg font-bold">{formatTime(timeLeft)}</span>
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className={`${settings.color} h-2 rounded-full transition-all duration-300`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="bg-white text-black p-6 rounded-lg mb-6">
            <p className="text-lg">{question.question}</p>
          </div>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => selectAnswer(index)}
                className={`w-full p-4 rounded-lg text-left font-medium transition-all ${
                  selectedAnswer === index
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}
              >
                {String.fromCharCode(97 + index)}) {option}
              </button>
            ))}
          </div>

          <button
            onClick={nextQuestion}
            disabled={selectedAnswer === null}
            className={`w-full mt-6 py-4 px-6 rounded-lg font-bold transition-all ${
              selectedAnswer !== null
                ? `${settings.color} ${settings.hoverColor} text-white`
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {currentQuestion < currentQuizQuestions.length - 1 ? t.next : t.finish}
          </button>
        </div>
      </div>
    );
  }

  if (screen === 'result') {
    const correctAnswers = getCorrectAnswers();
    const totalQuestions = currentQuizQuestions.length;
    const settings = difficultySettings[selectedDifficulty];
    const passed = correctAnswers >= settings.minCorrect;

    return (
      <div className="min-h-screen bg-slate-900 text-white p-4">
        <div className="absolute top-4 right-4">
          <FJULogo size="small" />
        </div>
        
        <div className="w-full max-w-sm mx-auto pt-20">
          <button
            onClick={() => setScreen('home')}
            className="mb-6 text-gray-300 hover:text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className={`w-full h-full ${passed ? 'bg-green-600' : 'bg-red-600'} rounded-full flex items-center justify-center`}>
                <Award className="w-16 h-16 text-yellow-400" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                {correctAnswers}
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-2">
              {passed ? t.congratulations : t.almostThere}
            </h2>
            <p className="text-4xl font-bold mb-2">{correctAnswers} {t.of} {totalQuestions}</p>
            <p className={`text-sm px-3 py-1 rounded inline-block mb-4 ${settings.color}`}>
              {t.mode} {t[settings.key]}
            </p>
            <p className="text-gray-300">
              {passed 
                ? `${t.passedMessage} ${t[settings.key]}! ${t.continueEvolving}` 
                : `${t.neededHits} ${settings.minCorrect} ${t.hits}. ${t.keepStudying}`}
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => setScreen('corrections')}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-6 rounded-lg transition-colors"
            >
              {t.viewCorrections}
            </button>
            
            <button
              onClick={startQuiz}
              className={`w-full ${settings.color} ${settings.hoverColor} text-white font-bold py-4 px-6 rounded-lg transition-colors`}
            >
              {t.retakeTest}
            </button>
            
            <button
              onClick={() => setScreen('home')}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors"
            >
              {t.backToHome}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'study') {
    const categories = language === 'pt' ? 
      Object.keys(rulesData.pt) :
      language === 'en' ? 
      Object.keys(rulesData.en) :
      Object.keys(rulesData.es);
      
    return (
      <div className="min-h-screen bg-gray-100 text-black">
        <div className="bg-white shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setScreen('home')}
              className="text-gray-600 hover:text-black"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">{t.studyRules}</h1>
          </div>
          <FJULogo size="small" />
        </div>

        <div className="p-4 space-y-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setScreen('category');
              }}
              className="w-full bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                {(category.includes('PONTU') || category.includes('SCOR') || category.includes('PUNT')) && <Star className="w-6 h-6" />}
                {(category.includes('PENAL')) && <AlertCircle className="w-6 h-6 text-red-600" />}
                {(category.includes('GOLPE') || category.includes('MOVE')) && <Shield className="w-6 h-6" />}
                {(category.includes('FAIXA') || category.includes('BELT') || category.includes('CINTU')) && <Award className="w-6 h-6" />}
                {(category.includes('ÁRBITRO') || category.includes('REFEREE') || category.includes('ÁRBITRO')) && <Users className="w-6 h-6" />}
              </div>
              <span className="font-bold text-left">{category}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (screen === 'category' && selectedCategory) {
    const categoryData = rulesData[language][selectedCategory] || [];

    return (
      <div className="min-h-screen bg-gray-100 text-black">
        <div className="bg-white shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setScreen('study')}
              className="text-gray-600 hover:text-black"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">{selectedCategory}</h1>
          </div>
          <FJULogo size="small" />
        </div>

        <div className="p-4 space-y-3">
          {categoryData.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">
                  {item.rule || item.faixa}
                </h3>
                {item.points && <span className="text-green-600 font-bold">{item.points}</span>}
                {item.penalty && <span className="text-red-600 font-bold">{item.penalty}</span>}
                {item.status && (
                  <span className={`font-bold ${item.status === 'Legal' ? 'text-green-600' : 'text-red-600'}`}>
                    {item.status}
                  </span>
                )}
                {item.tempo && <span className="text-blue-600 font-bold">{item.tempo}</span>}
              </div>
              <p className="text-gray-600">
                {item.description || item.when || item.golpes}
              </p>
              {item.faixa && !item.tempo && (
                <p className="text-sm text-gray-500 mt-1">{item.faixa}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (screen === 'corrections') {
    const settings = difficultySettings[selectedDifficulty];
    
    return (
      <div className="min-h-screen bg-gray-100 text-black">
        <div className="bg-white shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setScreen('result')}
              className="text-gray-600 hover:text-black"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">{t.corrections} - {t[settings.key]}</h1>
          </div>
          <FJULogo size="small" />
        </div>

        <div className="p-4 space-y-4">
          {currentQuizQuestions.map((question, index) => {
            const answer = answers.find(a => a.questionId === question.id);
            const isCorrect = answer?.correct;

            return (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                    isCorrect ? 'bg-green-600' : 'bg-red-600'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium mb-2">{question.question}</p>
                    <div className="space-y-1">
                      {question.options.map((option, optIndex) => (
                        <div
                          key={optIndex}
                          className={`p-2 rounded ${
                            optIndex === question.correct
                              ? 'bg-green-100 text-green-800 font-medium'
                              : answer?.selected === optIndex
                              ? 'bg-red-100 text-red-800'
                              : 'text-gray-600'
                          }`}
                        >
                          {String.fromCharCode(97 + optIndex)}) {option}
                          {optIndex === question.correct && ' ✓'}
                          {answer?.selected === optIndex && optIndex !== question.correct && ' ✗'}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4">
          <button
            onClick={() => setScreen('result')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            {t.backToResults}
          </button>
        </div>
      </div>
    );
  }

  if (screen === 'history') {
    return (
      <div className="min-h-screen bg-gray-100 text-black">
        <div className="bg-white shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setScreen('home')}
              className="text-gray-600 hover:text-black"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">{t.historyTitle}</h1>
          </div>
          <FJULogo size="small" />
        </div>

        <div className="p-4">
          {history.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow-sm text-center text-gray-500">
              <History className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p>{t.noTestsYet}</p>
              <button
                onClick={() => setScreen('select-difficulty')}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                {t.firstTest}
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {history.map((result, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-lg">{result.date} - {result.time}</p>
                      <p className="text-gray-600">
                        {t.correct} {result.correct}/{result.total} ({result.percentage}%)
                      </p>
                      <p className={`text-sm mt-1 ${
                        result.difficulty === t.beginner ? 'text-green-600' :
                        result.difficulty === t.intermediate ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {result.difficulty} • {result.passed ? t.approved : t.notApproved}
                      </p>
                    </div>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                      result.passed ? 'bg-green-600' : 'bg-red-600'
                    }`}>
                      {result.percentage}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}

export default App;
