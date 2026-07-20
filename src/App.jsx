import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import Home from '@/pages/Home';
import WritingFeedback from '@/pages/WritingFeedback';
import SpeakingFeedback from '@/pages/SpeakingFeedback';
import Pronunciation from '@/pages/Pronunciation';
import SilentLetters from '@/pages/SilentLetters';
import CommonProblems from '@/pages/CommonProblems';
import EngSpan from '@/pages/EngSpan';
import PhrasalVerbs from '@/pages/PhrasalVerbs';
import VerbsPrepositions from '@/pages/VerbsPrepositions';
import IdiomsExpressions from '@/pages/IdiomsExpressions';
import IngOrInfinitive from '@/pages/IngOrInfinitive';
import B1Conversation from '@/pages/B1Conversation';
import B1ConversationUnit from '@/pages/B1ConversationUnit';
import B2Conversation from '@/pages/B2Conversation';
import B2ConversationUnit from '@/pages/B2ConversationUnit';
import C1Conversation from '@/pages/C1Conversation';
import C1ConversationUnit from '@/pages/C1ConversationUnit';
import TextSelectionMenu from '@/components/TextSelectionMenu';
// Add page imports here

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/escritura" element={<WritingFeedback />} />
      <Route path="/expresion-oral" element={<SpeakingFeedback />} />
      <Route path="/pronunciacion" element={<Pronunciation />} />
      <Route path="/letras-silenciosas" element={<SilentLetters />} />
      <Route path="/common-problems" element={<CommonProblems />} />
      <Route path="/engspan" element={<EngSpan />} />
      <Route path="/phrasal-verbs" element={<PhrasalVerbs />} />
      <Route path="/verbs-prepositions" element={<VerbsPrepositions />} />
      <Route path="/idioms-expressions" element={<IdiomsExpressions />} />
      <Route path="/ing-or-infinitive" element={<IngOrInfinitive />} />
      <Route path="/b1-conversation" element={<B1Conversation />} />
      <Route path="/b1-conversation/unit/:unit" element={<B1ConversationUnit />} />
      <Route path="/b2-conversation" element={<B2Conversation />} />
      <Route path="/b2-conversation/unit/:unit" element={<B2ConversationUnit />} />
      <Route path="/c1-conversation" element={<C1Conversation />} />
      <Route path="/c1-conversation/unit-:unit" element={<C1ConversationUnit />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <TextSelectionMenu />
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App