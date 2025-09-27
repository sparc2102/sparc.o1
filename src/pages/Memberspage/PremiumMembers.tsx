import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Users, Lock } from 'lucide-react';

// Authentication Context
interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

// Auth Provider Component
interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Protected Component for Member Cards
interface ProtectedMembersProps {
  children: ReactNode;
}

const ProtectedMembers: React.FC<ProtectedMembersProps> = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="relative">
      <div className={isLoggedIn ? '' : 'filter blur-sm'}>
        {children}
      </div>
      {!isLoggedIn && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white text-lg">
            <Lock className="w-12 h-12 mx-auto mb-4 text-white" aria-hidden="true" />
            <p>Only premium members can access the members directory.</p>
          </div>
        </div>
      )}
    </div>
  );
};

type Member = {
  name: string;
  role: string;
  country: string;
  avatar: string;
  membership: 'Premium' | 'VIP';
};

const PREMIUM_MEMBERS_URL = 'https://raw.githubusercontent.com/sparc2102/sparc/refs/heads/main/premium_members.json';

const usePremiumMembers = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(PREMIUM_MEMBERS_URL)
      .then(res => res.json())
      .then((data: Member[]) => {
        setMembers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch members:', err);
        setLoading(false);
      });
  }, []);

  return { members, loading };
};

const PremiumMembers: React.FC = () => {
  const { members, loading } = usePremiumMembers();
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCountry, setFilterCountry] = useState('');
  const [filterMembership, setFilterMembership] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 20;

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCountry ? member.country === filterCountry : true) &&
    (filterMembership ? member.membership === filterMembership : true)
  );

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const countries = [...new Set(members.map(member => member.country))];
  const membershipTypes = ['Premium', 'VIP'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-blue-900">
      {/* Header with Logout Button */}
      <header className="py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-white">SPARC Members</h1>
        {isLoggedIn && (
          <Button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
            aria-label="Log out"
          >
            Log Out
          </Button>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-8 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 bg-opacity-0 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-blue-400" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              SPARC Members Directory
            </h1>
            <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto">
              Discover the innovators shaping healthcare and pharmaceutical sciences.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white bg-opacity-0 backdrop-blur-md border border-blue-800 rounded-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="w-full md:w-1/3">
                  <input
                    type="text"
                    placeholder="Search by name, role, or institution..."
                    className="w-full bg-white bg-opacity-20 text-white p-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-label="Search members by name, role, or institution"
                  />
                </div>
                <div className="w-full md:w-1/3">
                  <select
                    className="w-full bg-white bg-opacity-20 text-white p-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={filterCountry}
                    onChange={(e) => setFilterCountry(e.target.value)}
                    aria-label="Filter members by country"
                  >
                    <option value="">All Countries</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div className="w-full md:w-1/3">
                  <select
                    className="w-full bg-white bg-opacity-20 text-white p-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={filterMembership}
                    onChange={(e) => setFilterMembership(e.target.value)}
                    aria-label="Filter members by membership type"
                  >
                    <option value="">All Memberships</option>
                    {membershipTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Members Directory */}
          {loading ? (
            <p className="text-center text-white text-lg">Loading members...</p>
          ) : (
            <ProtectedMembers>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
                {currentMembers.map(member => (
                  <Card
                    key={member.name}
                    className="bg-white bg-opacity-0 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-transform transition-shadow duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] border border-blue-800 rounded-lg"
                  >
                    <CardContent className="pt-6 flex flex-col items-center text-center">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4"
                      />
                      <h3 className="font-bold text-lg sm:text-xl text-white">{member.name}</h3>
                      <p className="text-gray-300 text-sm">{member.role}</p>
                      <p className="text-gray-400 text-sm">{member.country}</p>
                      <span
                        className={`mt-3 inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                          member.membership === 'VIP' ? 'bg-purple-100 bg-opacity-80 text-purple-700' : 'bg-blue-100 bg-opacity-80 text-blue-700'
                        }`}
                      >
                        {member.membership}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ProtectedMembers>
          )}

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(filteredMembers.length / membersPerPage) }, (_, i) => (
              <Button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-3 py-1 rounded-lg text-sm sm:text-base ${
                  currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-200 hover:bg-gray-500'
                }`}
                aria-current={currentPage === i + 1 ? 'page' : undefined}
                aria-label={`Go to page ${i + 1}`}
              >
                {i + 1}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Connect CTA Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-8 border border-blue-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Want to Connect with Our Premium & VIP Members?
          </h2>
          <p className="text-gray-300 mb-6">
            Get in touch directly with innovators shaping the future of healthcare and pharmaceuticals.
          </p>
          <a
            href="https://wa.me/+919342205876"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg text-lg transition-colors duration-300"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

// Wrap the component with AuthProvider
const App = () => (
  <AuthProvider>
    <PremiumMembers />
  </AuthProvider>
);

export default App;