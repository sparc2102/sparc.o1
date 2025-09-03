import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { supabase } from '../lib/supabase';
import { 
  MessageSquare, 
  User, 
  Clock, 
  ThumbsUp, 
  Reply,
  ArrowLeft,
  AlertCircle,
  Send,
  Eye,
  Tag,
  Flag,
  Edit,
  Trash2
} from 'lucide-react';
import { format } from 'date-fns';

interface ForumTopic {
  id: string;
  title: string;
  content: string;
  author_id: string;
  category: string;
  replies_count: number;
  views_count: number;
  created_at: string;
  updated_at: string;
  tags: string[];
  author?: {
    name: string;
    membership_tier: string;
  };
}

interface ForumReply {
  id: string;
  topic_id: string;
  author_id: string;
  content: string;
  created_at: string;
  parent_reply_id?: string;
  author?: {
    name: string;
    membership_tier: string;
  };
}

export function ForumTopicDetailPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const { user } = useAuth();
  const [topic, setTopic] = useState<ForumTopic | null>(null);
  const [replies, setReplies] = useState<ForumReply[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [replyContent, setReplyContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (topicId) {
      fetchTopicDetails();
      incrementViewCount();
    }
  }, [topicId]);

  const fetchTopicDetails = async () => {
    try {
      // Fetch topic with author info
      const { data: topicData, error: topicError } = await supabase
        .from('forum_topics')
        .select(`
          *,
          author:users!forum_topics_author_id_fkey(name, membership_tier)
        `)
        .eq('id', topicId)
        .single();

      if (topicError) throw topicError;
      setTopic(topicData);

      // Fetch replies with author info
      const { data: repliesData, error: repliesError } = await supabase
        .from('forum_replies')
        .select(`
          *,
          author:users!forum_replies_author_id_fkey(name, membership_tier)
        `)
        .eq('topic_id', topicId)
        .order('created_at', { ascending: true });

      if (repliesError) throw repliesError;
      setReplies(repliesData || []);
    } catch (error) {
      setError('Failed to load topic details');
      console.error('Error fetching topic:', error);
    } finally {
      setLoading(false);
    }
  };

  const incrementViewCount = async () => {
    try {
      await supabase.rpc('increment_topic_views', { topic_id: topicId });
    } catch (error) {
      console.error('Error incrementing view count:', error);
    }
  };

  const handleReplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !replyContent.trim()) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('forum_replies')
        .insert({
          topic_id: topicId!,
          author_id: user.id,
          content: replyContent.trim()
        });

      if (error) throw error;

      // Update replies count
      await supabase
        .from('forum_topics')
        .update({ 
          replies_count: (topic?.replies_count || 0) + 1,
          updated_at: new Date().toISOString()
        })
        .eq('id', topicId);

      setReplyContent('');
      fetchTopicDetails(); // Refresh to show new reply
    } catch (error) {
      setError('Failed to post reply');
      console.error('Reply error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'genesis': return 'bg-green-100 text-green-700 border-green-200';
      case 'professional': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'fellows': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !topic) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Topic Not Found</h2>
            <p className="text-gray-600 mb-4">The discussion topic you're looking for doesn't exist.</p>
            <Link to="/community">
              <Button>Back to Community</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/community" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Community
          </Link>
        </div>

        {/* Topic Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {topic.category}
                  </span>
                  <div className="ml-4 flex items-center text-sm text-gray-500">
                    <Eye className="h-4 w-4 mr-1" />
                    {topic.views_count} views
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{topic.title}</h1>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span className="font-medium">{topic.author?.name}</span>
                    <span className={`ml-2 px-2 py-0.5 text-xs rounded-full border ${getTierColor(topic.author?.membership_tier || 'genesis')}`}>
                      {topic.author?.membership_tier?.charAt(0).toUpperCase() + topic.author?.membership_tier?.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {format(new Date(topic.created_at), 'MMM dd, yyyy')}
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    {topic.replies_count} replies
                  </div>
                </div>
              </div>
              <div className="ml-6 flex space-x-2">
                <Button variant="outline" size="sm">
                  <Flag className="h-4 w-4 mr-1" />
                  Report
                </Button>
                {user?.id === topic.author_id && (
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                )}
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{topic.content}</p>
            </div>

            {/* Tags */}
            {topic.tags && topic.tags.length > 0 && (
              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {topic.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      <Tag className="h-3 w-3 mr-1 inline" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Topic Actions */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-6">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  Helpful (12)
                </Button>
                <Button variant="ghost" size="sm">
                  <Reply className="h-4 w-4 mr-1" />
                  Quote
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <MessageSquare className="h-4 w-4 mr-1" />
                Subscribe to Updates
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Replies Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Replies ({topic.replies_count})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {replies.map((reply) => (
                <div key={reply.id} className="border-l-2 border-gray-200 pl-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">{reply.author?.name}</span>
                        <span className={`ml-2 px-2 py-0.5 text-xs rounded-full border ${getTierColor(reply.author?.membership_tier || 'genesis')}`}>
                          {reply.author?.membership_tier?.charAt(0).toUpperCase() + reply.author?.membership_tier?.slice(1)}
                        </span>
                        <div className="text-sm text-gray-500">
                          {format(new Date(reply.created_at), 'MMM dd, yyyy • h:mm a')}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Reply className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{reply.content}</p>
                  </div>
                </div>
              ))}

              {replies.length === 0 && (
                <div className="text-center py-8">
                  <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No replies yet. Be the first to contribute to this discussion!</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Reply Form */}
        {user ? (
          <Card>
            <CardHeader>
              <CardTitle>Add Your Reply</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleReplySubmit} className="space-y-4">
                <div>
                  <textarea
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder="Share your thoughts and insights..."
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Posting as <span className="font-medium">{user.name}</span>
                    <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${getTierColor(user.membershipTier)}`}>
                      {user.membershipTier.charAt(0).toUpperCase() + user.membershipTier.slice(1)}
                    </span>
                  </div>
                  <Button type="submit" isLoading={isSubmitting}>
                    <Send className="h-4 w-4 mr-2" />
                    Post Reply
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-6 text-center">
              <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Join the Discussion</h3>
              <p className="text-gray-600 mb-4">
                Sign in to reply to this topic and engage with the SPARC community.
              </p>
              <Link to="/login">
                <Button>Sign In to Reply</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}