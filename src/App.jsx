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
import PhrasalVerbsQuestions from '@/pages/PhrasalVerbsQuestions';
import PhrasalVerbsQA from '@/pages/PhrasalVerbsQA';
import SeparableNonSeparable from '@/pages/SeparableNonSeparable';
import VerbsPrepositions from '@/pages/VerbsPrepositions';
import IdiomsExpressions from '@/pages/IdiomsExpressions';
import IdiomsOne from '@/pages/IdiomsOne';
import IdiomsTwo from '@/pages/IdiomsTwo';
import IdiomsThree from '@/pages/IdiomsThree';
import IdiomsFour from '@/pages/IdiomsFour';
import IngOrInfinitive from '@/pages/IngOrInfinitive';
import B1Conversation from '@/pages/B1Conversation';
import B1ConversationUnit from '@/pages/B1ConversationUnit';
import B2Conversation from '@/pages/B2Conversation';
import B2ConversationUnit from '@/pages/B2ConversationUnit';
import C1Conversation from '@/pages/C1Conversation';
import C1ConversationUnit from '@/pages/C1ConversationUnit';
import DoVsMake from '@/pages/DoVsMake';
import InversionConditionals from '@/pages/InversionConditionals';
import ConditionalsOneTwoThree from '@/pages/ConditionalsOneTwoThree';
import InversionWithConditionals from '@/pages/InversionWithConditionals';
import ComparativeSuperlative from '@/pages/ComparativeSuperlative';
import Causative from '@/pages/Causative';
import DirectIndirectQuestions from '@/pages/DirectIndirectQuestions';
import InfinitiveOfPurpose from '@/pages/InfinitiveOfPurpose';
import ModalVerbs from '@/pages/ModalVerbs';
import NegativeInfinitive from '@/pages/NegativeInfinitive';
import ParticipleClause from '@/pages/ParticipleClause';
import PassiveVoice from '@/pages/PassiveVoice';
import PhrasalNouns from '@/pages/PhrasalNouns';
import PrepositionsTimePlace from '@/pages/PrepositionsTimePlace';
import RelativePronouns from '@/pages/RelativePronouns';
import ReportingVerbs from '@/pages/ReportingVerbs';
import Unreal from '@/pages/Unreal';
import Tenses from '@/pages/Tenses';
import Articles from '@/pages/Articles';
import UsedToWould from '@/pages/UsedToWould';
import UsedToVsBeUsedTo from '@/pages/UsedToVsBeUsedTo';
import SimilesMetaphors from '@/pages/SimilesMetaphors';
import Affixes from '@/pages/Affixes';
import SoftSkills from '@/pages/SoftSkills';
import Business from '@/pages/Business';
import BusinessOne from '@/pages/BusinessOne';
import BusinessTwo from '@/pages/BusinessTwo';
import BusinessThree from '@/pages/BusinessThree';
import TextSelectionMenu from '@/components/TextSelectionMenu';
import StartLearning from '@/pages/StartLearning';
import News from '@/pages/News';
import EasyEnglishConversation from '@/pages/EasyEnglishConversation';
import LearnEnglishWithTVSeries from '@/pages/LearnEnglishWithTVSeries';
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
      <Route path="/comenzar" element={<StartLearning />} />
      <Route path="/watch/news" element={<News />} />
      <Route path="/watch/easy-english-conversation" element={<EasyEnglishConversation />} />
      <Route path="/watch/learn-english-with-tv-series" element={<LearnEnglishWithTVSeries />} />
      <Route path="/escritura" element={<WritingFeedback />} />
      <Route path="/expresion-oral" element={<SpeakingFeedback />} />
      <Route path="/pronunciacion" element={<Pronunciation />} />
      <Route path="/letras-silenciosas" element={<SilentLetters />} />
      <Route path="/common-problems" element={<CommonProblems />} />
      <Route path="/engspan" element={<EngSpan />} />
      <Route path="/phrasal-verbs" element={<PhrasalVerbs />} />
      <Route path="/phrasal-verbs/questions" element={<PhrasalVerbsQuestions />} />
      <Route path="/phrasal-verbs/qa" element={<PhrasalVerbsQA />} />
      <Route path="/phrasal-verbs/separable-non-separable" element={<SeparableNonSeparable />} />
      <Route path="/verbs-prepositions" element={<VerbsPrepositions />} />
      <Route path="/idioms-expressions" element={<IdiomsExpressions />} />
      <Route path="/idioms-expressions/idioms-1" element={<IdiomsOne />} />
      <Route path="/idioms-expressions/idioms-2" element={<IdiomsTwo />} />
      <Route path="/idioms-expressions/idioms-3" element={<IdiomsThree />} />
      <Route path="/idioms-expressions/idioms-4" element={<IdiomsFour />} />
      <Route path="/ing-or-infinitive" element={<IngOrInfinitive />} />
      <Route path="/do-vs-make" element={<DoVsMake />} />
      <Route path="/inversion-conditionals" element={<InversionConditionals />} />
      <Route path="/inversion-conditionals/conditionals-1-2-3" element={<ConditionalsOneTwoThree />} />
      <Route path="/inversion-conditionals/inversion-with-conditionals" element={<InversionWithConditionals />} />
      <Route path="/comparative-superlative" element={<ComparativeSuperlative />} />
      <Route path="/causative" element={<Causative />} />
      <Route path="/direct-indirect-questions" element={<DirectIndirectQuestions />} />
      <Route path="/infinitive-of-purpose" element={<InfinitiveOfPurpose />} />
      <Route path="/modal-verbs" element={<ModalVerbs />} />
      <Route path="/negative-infinitive" element={<NegativeInfinitive />} />
      <Route path="/participle-clause" element={<ParticipleClause />} />
      <Route path="/passive-voice" element={<PassiveVoice />} />
      <Route path="/phrasal-nouns" element={<PhrasalNouns />} />
      <Route path="/prepositions-time-place" element={<PrepositionsTimePlace />} />
      <Route path="/relative-pronouns" element={<RelativePronouns />} />
      <Route path="/reporting-verbs" element={<ReportingVerbs />} />
      <Route path="/unreal" element={<Unreal />} />
      <Route path="/tenses" element={<Tenses />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/used-to-would" element={<UsedToWould />} />
      <Route path="/used-to-vs-be-used-to" element={<UsedToVsBeUsedTo />} />
      <Route path="/similes-metaphors" element={<SimilesMetaphors />} />
      <Route path="/affixes" element={<Affixes />} />
      <Route path="/soft-skills" element={<SoftSkills />} />
      <Route path="/business" element={<Business />} />
      <Route path="/business/business-1" element={<BusinessOne />} />
      <Route path="/business/business-2" element={<BusinessTwo />} />
      <Route path="/business/business-3" element={<BusinessThree />} />
      <Route path="/b1-conversation" element={<B1Conversation />} />
      <Route path="/b1-conversation/unit/:unit" element={<B1ConversationUnit />} />
      <Route path="/b2-conversation" element={<B2Conversation />} />
      <Route path="/b2-conversation/unit/:unit" element={<B2ConversationUnit />} />
      <Route path="/c1-conversation" element={<C1Conversation />} />
      <Route path="/c1-conversation/unit/:unit" element={<C1ConversationUnit />} />
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